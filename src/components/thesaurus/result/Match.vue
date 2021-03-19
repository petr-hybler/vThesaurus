<template lang="html">
  <div class="container">
    <template v-for="(item, index) in data">
      <div class="row mt-4" :key="index">
        <div class="h2">{{item.hwi.hw}} <sup><small class="small text-light">{{item.fl}}</small></sup></div>

        <div class="container text-white">
          <div class="row">
            <strong class="text-original">Offensive</strong>: {{(item.meta.offensive) ? "Yes" : "No"}}
          </div>
          <div class="row">
            <strong class="text-original">Def: </strong> {{ getDefinition(item.def) }}
          </div>
          <div class="row">
            <strong class="text-original">Regional: </strong> {{ getRegional(item.def) }}
          </div>
          <div class="row">
            <strong class="text-original">Pronounciation: </strong> {{ getPronunciation(item.hwi) }}
          </div>
          <div class="row">
            <strong class="text-original">First known use: </strong> {{ getFirstUsed(item.date) }}
          </div>
          <div class="row">
            <strong class="text-original">Etimology: </strong> <p v-html="getEtimology(item.et)"></p>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
  export default {
    name: "Match",
    props: ['data'],
    methods: {
      getPronunciation(data){
        let value = null
        if (typeof data.prs !== 'undefined'){
          let items = []
          data.prs.forEach(item => {
            if (item !== 'undefined'){
              items.push(item.mw)
            }
          })
          value = items.join(", ")
        }
        return value
      },
      getFirstUsed(data){
        let value = null
        if(typeof data !== 'undefined'){
          value = data.split("{")[0]
        }
        return value
      },
      getDefinition(data){
        let value = null
        if(typeof data[0].sseq !== 'undefined'){
            value = data[0].sseq[0]
            value.forEach(item => {
              item.forEach(i => {
                if(typeof i == "object" ){
                  if(i.sense !== undefined){
                      value = i.sense.dt[0][1]
                  }
                }
              })
              if(item[1].dt !== undefined) {
                value = item[1].dt[0][1]
              }
            })
        }
        return value.replace("{bc}", "");
      },
      getRegional(data){
        let value = null
        if(typeof data[0].sls !== 'undefined'){
          value = data[0].sls.join()
        }
        return value
      },
      getEtimology(data){
        let value = null
        if(typeof data !== 'undefined'){
          value = data[0][1].replace(/{it}/g,"<i>")
                            .replace(/{\/it}/g, "</i>")
                            .replace(/{ma}(.*){\/ma}/g,"")
        }
        return value
      }
    }
  }
</script>

<style lang="css" scoped>
.small {
  font-size: 0.8rem;
}
</style>
