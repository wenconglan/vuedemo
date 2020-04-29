<template>
	<van-tabbar v-model="active">
		<van-tabbar-item 
		v-for="(foot,i) in foots" 
		:key="i"
		>
		<!-- <i class="van-icon van-icon-home-o"></i> -->
			{{foot.txt}}
		</van-tabbar-item>
	</van-tabbar>
</template> 

<script>
import {foots} from "@/utils";
export default {
	data(){
		return {
			active:0,
			foots
		}
	},
	watch:{
		active(newVal){
			this.$router.push({name:this.foots[newVal].name})
		}
	},
	mounted() {
		this.foots.forEach((item,i) => {
			if(item.name===this.$route.name){
				this.active=i;
			}
		});
		
	},
}
</script>

<style lang="scss" scoped>

</style>
