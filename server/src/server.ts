import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.get("/games", async (request, response) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true,
        },
      },
    },
  });
  return response.json(games);
}); // list games and quantity ads

app.post("/ads", (request, response) => {
  return response.status(200).json([]);
}); //created ad

app.get("/games/:id/ads", async (request, response) => {
  const gameId = request.params.id;
  const ads = await prisma.ad.findMany({
    select: {
        id: true,
        name: true,
        weekDays: true,
        useVoiceChannel: true,
        hoursStart: true,
        hoursEnd: true,
        yearsPlaying: true,
    },
    where: {
        gameId,
    },
    orderBy:{
        createdAt: 'desc',
    }

  })
  return response.json(ads.map(ad => {
    return {
        ...ad,
        weekDays: ad.weekDays.split(','),
       // hourStart: convertMinutesToHourString(ad.hourStart),
       // hourEnd: convertMinutesToHourString(ad.hourEnd),
      }
    }));
  }); // list ads by game

app.get("/ads/:id/discord", (request, response) => {
  // const adsId = req.params.id;

  return response.json([]);
}); //show discord

app.listen(3333);
