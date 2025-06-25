const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
const path = require('path');

if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: __dirname + '/set.env' });
}

const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined 
    ? databasePath 
    : process.env.DATABASE_URL;


const config = {
    session: process.env.SESSION_ID || 'ALPHA;;;H4sIAAAAAAAAA61W2Y6bSBT9lVG92orZF0sthc0bdtttvI/moYACyqwuCmMc+VPyli/Ll4xwd09aSqanRwpPRQH3nnvq3HP5ArIcl8hGDeh/AQXBZ0hRu6RNgUAf6FUQIAK6wIcUgj6AA/sU7TLLWTx5ZWPagaZcLo+bKAvswl1KDttRsCtugqch8wBuXVBUboK9dwKuhIldE/36FFfhfAazU5SOzz5ZR3VmRLNyUDv2QKZ4xjnKA7i1ESEmOAutIkIpIjCxUbOAmHwMPjc/XrQB5+SbzJ3vSq2cnabJcH9IezvBXjodSV0tez38+MR7H4PfTI9UOKpJKZ2vorfy680MalUU0iyZUwMehoYsTw9n34/Wz/BLHGbIH/soo5g2H+b9aUGVjuVOWEdRfHvMXk3UYfcj3rloI7npXdJBcRqc64NhxR8DXhuB6c1m1yVbcUPJ70mj8VqeqfbT5DrPDdeP6kDMp/Mxs/PeAl+QV63E/4f3ehLb20syutrr7bo60b2rn3oFl49G4aZnRxPhyPjqqZY09oOy4TK0P8RZgOPssPJ5gVw77LqxpomqZ37u76iSktK/dtBq9gM+pBV5D2Vcb2BYWVG83spbGO63uZgW6WR6WoTX1VmSlemC1OPDMCmWcyyUm3A+OoS7k+JclGN81nRnxcTWalTl+coVhT0R11yBtYd7RTFqxj7os7cuICjEJSWQ4jxr9ySuC6B/dpBHEL2zC1x7X/m00wjQc1wmWir7rZyLRJw4Q03m4+Ol3uytbWpsjsoD6IKC5B4qS+SPcElz0sxQWcIQlaD/5/2g2poJSnOKJthv2RMFlhVYleVF5XP5qY4gLWFRfMoQBV0QkDydIdCnpEJdcP+AETjVVHXG4HmO44QBLxqSNJB0zlB5bWDIbYXpc9IVTlFJYVqAPiuLjKJwCqPeur8Hh8HzKjtQJUk0RMEUrIHOyYbOWoJkyJbKWO/jYJXfhUNSOUkXOdYUTYkzVVFRVGUgGJbJqALLaNL7OHjxd+HgGMtkZFOQVNEQONFgdUViZNWUBqLMmQb/Pg6Buf3VBRm60Oe2bsXIs10QYFLSdVYVSQ79155/fQg9L68y6jSZZ7QLRED/zTaiFGdh2VZWZZB4ET4jo60D9AOYlOgf/SOC/NdaXjzdyP22LdlHczaUhQlosbeBfuKmL/zMTvL8liDJPC9wnCCxjCr2hc/tfhdksA0FTJhR9EfqVRT98f3rt+9fv7UMvWBvU/mIQpyUrdQe+R2335vWHF0VbzwcalaoGaEGftT6aikvPcs6ubtY4mlAYrfiOvniNGkQEc8zez0ds2JgsaMSmXFxsR5+EaQdJjpXCoupczxjbrsUCSNfz+x0gVzDwvpxW/QyGQ0jFHFXq6gUnncYND76o3jFDVhPOlhsaKz2VyGZHhoSisvGEQJFb/2nC3x0xh56m6xyz852exxLenxsVLuj+qWa1tKl3geQd+1gdkkXTRnEjRT0KhJEQ3uw72yny7IzlWs290xvcUymZJGkm22y09OCcNuwfja7u9kmL0MOv/gQvt8GGN1nxsuB/NepPuNutcfcum9CvAyhfzFyfauuT8Mrs8e8JA5lej6ZEvayU8e9GonRPKLd5XEpj0LR9pbg1jZBkUAa5CRtf3Eyn+R30ZC8asU8zoL8nWSGNh4bLy6fwJJqPxrkV14oPL+1IHkxgmXUcrCR5dO6VXujFYVDIX3tN6C116TXAbe/AXVLGjWpCQAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Allamano",
    NUMERO_OWNER: process.env.NUMERO_OWNER || "254114191358",     
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',    
    URL: process.env.URL || "https://files.catbox.moe/grlqyj.png",                         
    AUTO_BLOCK: process.env.AUTO_BLOCK || 'yes', 
    GCF: process.env.GROUP_CONTROL || 'yes',     
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || 'viewed by neurotech',   
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || 'yes',  
    ANTICALL_MSG: process.env.ANTICALL_MSG || 'madueke is offline',             
    GURL: process.env.GURL || "https://www.whatsapp.com/channel/0029VbAGDcU2f3ETH93NUd3o",
    EVENTS: process.env.EVENTS || "yes",    
    BOT: process.env.BOT_NAME || 'NEUROTECH_MD',
    MODE: process.env.PUBLIC_MODE || "yes",              
    TIMEZONE: process.env.TIMEZONE || "Africa/Nairobi", 
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    DP: process.env.STARTING_BOT_MESSAGE || "yes",
    ADM: process.env.ANTI_DELETE_MESSAGE || 'no',
    
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? new Sequelize({
            dialect: 'sqlite',
            storage: DATABASE_URL,
            logging: false,
        })
        : new Sequelize(DATABASE_URL, {
            dialect: 'postgres',
            ssl: true,
            protocol: 'postgres',
            dialectOptions: {
                native: true,
                ssl: { 
                    require: true, 
                    rejectUnauthorized: false 
                },
            },
            logging: false,
        })
};


let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

module.exports = config;
