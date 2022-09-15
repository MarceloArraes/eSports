import express from "express";
import cors from 'cors';
import { PrismaClient } from '@prisma/client'
import { convertHourStringToMinutes } from "./utils/convert-hour-to-minutes";
import { convertMinutesToHours } from "./utils/convert-minutes-to-hours";

const app = express();

app.use(express.json())

app.use(cors())

const prisma = new PrismaClient({
  log:['query']
});

app.get('/games', async (req, res) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          Ad: true,
        }
    },
    }});
  return res.json(games);
})

app.get('/games/:id/ads', async (req: any, res: any) => {
  const gameId = req.params.id;

  const ads = await prisma.ad.findMany({
    select: {
      id: true,
      name: true,
      weekDays: true,
      useVoiceChannel: true,
      hourEnd: true,
      hourStart: true,
      yearsPlaying: true,
    },
    where: {
      gameId,
    }
  })

  return res.json(ads.map(ad => {
    return {
      ...ad,
      weekDays: ad.weekDays.split(','),
      hourStart: convertMinutesToHours(ad.hourStart),
      hourEnd: convertMinutesToHours(ad.hourEnd),
    }
  }));
});

app.post('/games/:id/ads', async (req: any, res: any) => {
  const gameId = req.params.id;
  const body = req.body

  const ad = await prisma.ad.create({
    data: {
      gameId,
      name: body.name,
      yearsPlaying: body.yearsPlaying,
      discord: body.discord,
      weekDays: body.weekDays.join(','),
      hourStart: convertHourStringToMinutes(body.hourStart),
      hourEnd: convertHourStringToMinutes(body.hourEnd),
      useVoiceChannel: body.useVoiceChannel,
    }
  })

  return res.status(201).json(ad);
});

app.get('/ads/:id/discord', async (req: any, res: any) => {
  const adId = req.params.id;

  const ad = await prisma.ad.findUniqueOrThrow({
    select: {
      discord:true,
    },
    where: {
      id: adId,
    }
  })

  return res.status(200).json({
    discord: ad.discord,
  });

});

app.listen(3000)