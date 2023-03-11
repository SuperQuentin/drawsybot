import type { NextApiRequest, NextApiResponse } from "next";
import { type Context, Telegraf } from "telegraf";

const { message } = require("telegraf/filters");

import { env } from "~/env.mjs";

const bot: Telegraf = new Telegraf(env.TELEGRAM_TOKEN);

const tgWebhook = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    bot.start(async (ctx) => {
      await ctx.reply(`Hi, ${ctx.from.first_name} !`);
    });
    console.log(req.body.new_chat_member.username);

    res.status(200).send("OK");
  } catch (error) {
    console.log(error);
  }
};

export default tgWebhook;
