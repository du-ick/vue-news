import ListView from './ListView.vue';
import eventBus from '@/utils/eventBus.js';

export default function createListView(name) {
    return {
        //재사용할 인스턴스 옵션 입력
        name : name,
        created() {
            eventBus.$emit('start:spinner');
        
            //가상 데이터환경 세팅
            // setTimeout(()=>
            // }, 3000);

            this.$store.dispatch('FETCH_LIST', this.$route.name)
              .then(()=> {
                console.log('fetched');
                eventBus.$emit('end:spinner')
              })
              .catch((err) => {
                console.log(err)
              });
          },
        render(createElement) {
            return createElement(ListView);
        }
    }

}