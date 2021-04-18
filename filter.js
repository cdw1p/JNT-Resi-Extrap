const axios = require('axios')
const cheerio = require('cheerio')
const cheerioTableparser = require('cheerio-tableparser')
const fs = require('fs-extra')
require('colors')

;(async () => {
  try {
    const listResi = await fs.readFileSync('./output/jnt_list.txt', 'utf-8').split('\n')
    for (dataResi of listResi) {
      const prefix = 'Apr 2021'
      if (dataResi.match(prefix)) {
        await fs.ensureDirSync('output')
        await fs.appendFileSync(`./output/jnt_filter_${prefix.replace(' ', '_').toLowerCase()}.txt`, `${dataResi}\n`)
        console.log(dataResi.green.bold)
      } else {
        console.log(dataResi.red)
      }
    }
  } catch (err) {
    console.log(`Error: ${err.message}`.red)
  }
})()