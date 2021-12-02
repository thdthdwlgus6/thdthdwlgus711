const Discord = require('discord.js')
const client = new Discord.Client({intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES]})

client.once('ready', async () => {
    console.log('I am ready!')
})

client.on('messageCreate', async message => {
    if (message.content.toLocaleLowerCase() === '!번역 안녕'){
        message.reply('\의아잇늬 땨 늬여잇의 땨')
    }
})

client.on('messageCreate', async message => {
    if (message.content.toLocaleLowerCase() === '!번역 안녕하세요'){
        message.reply('의아잇늬 땨 늬여잇의 땨 희아잇 땨 싀에잇 땨 의요잇 땨.')
    }
})

client.on('messageCreate', async message => {
    if (message.content.toLocaleLowerCase() === '!번역 반가워'){
        message.reply('븨아잇늬 땨 의여잇긔 땨 의워잇 땨')
    }
})

client.on('messageCreate', async message => {
    if (message.content.toLocaleLowerCase() === '!번역 제작자'){
        message.reply('의이잇 땨 싀으잇의 땨 의워잇늬 땨, 긔이잇믜 땨 틔애잇 땨 의워잇늬 땨, 싀오잇의 땨 즤이잇 땨 희여잇늬 땨(듸이잇 땨 싀으잇 땨 킈오잇 땨 듸으잇 땨 븨오잇싀 땨 즤에잇 땨 즤아잇긔 땨 즤아잇)')
    }
})

client.on('messageCreate', async message => {
    if (message.content.toLocaleLowerCase() === '!번역 하지마'){
        message.reply('희아잇 땨 즤이잇 땨 믜아잇 땨')
    }
})

client.on('messageCreate', async message => {
    if (message.content.toLocaleLowerCase() === '!번역 이거 해줘'){
        message.reply('의이잇 땨 긔어잇 땨 햐 희애잇 땨 즤워잇 땨')
    }
})

client.on('messageCreate', async message => {
    if (message.content.toLocaleLowerCase() === '!번역 뭐'){
        message.reply('믜어잇')
    }
})

client.on('messageCreate', async message => {
    if (message.content.toLocaleLowerCase() === '!번역 아'){
        message.reply('의아잇')
    }
})

client.on('messageCreate', async message => {
    if (message.content.toLocaleLowerCase() === '!번역 미안'){
        message.reply('믜아잇 땨 의아잇늬 땨')
    }
})

client.on('messageCreate', async message => {
    if (message.content.toLocaleLowerCase() === '!번역 시발'){
        message.reply('싀이잇 땨 븨아잇릐')
    }
})

client.on('messageCreate', async message => {
    if (message.content.toLocaleLowerCase() === '!번역 야'){
        message.reply('의야잇')
    }
})

client.on('messageCreate', async message => {
    if (message.content.toLocaleLowerCase() === '!번역 게임하자'){
        message.reply('긔에잇 땨 의이잇믜 땨 희아잇 땨 즤아잇 땨')
    }
})

client.login('OTE1ODQ3MzAwNDM2MzQ4OTY5.YahjRA.546laUHsg0Ltyq58zXLm1xJeVrs')