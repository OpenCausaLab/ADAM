async function craftIronShovel(bot) {
    const position = bot.entity.position.offset(1, 0, 0);
    await placeItem(bot, "crafting_table", position);
    await craftItem(bot, "iron_shovel", 1);
    bot.chat("Crafted a iron shovel.");
}
