<template>
	<div class="guide box">
		<van-swipe class="my-swipe"
		 :autoplay="3000" 
		 indicator-color="white"
		 >
		<van-swipe-item v-for="(img,i) in imgs" :key="i">
			<img @click="gotoMain(i)" class="g-img" :src="img" alt="">
		</van-swipe-item>
		</van-swipe>
	</div>
</template>

<script>
export default {
	data(){
		return {
			imgs:[
				require("@/assets/images/slide1.png"),
				require("@/assets/images/slide2.png"),
				require("@/assets/images/slide3.png"),
				require("@/assets/images/slide4.png")
			]
		} 
	},
	methods: {
		gotoMain(data){
			if(data===this.imgs.length-1){
				this.$router.push({name:"movie"});
			}
		}
	},
	mounted(){
		if(localStorage.visitCount){
			localStorage.visitCount++;
			if(localStorage.visitCount>3){
				this.$router.push({name:"movie"});
			}
		}else{
			localStorage.visitCount=1;
		}
	}
}
</script>

<style lang="scss" scoped>
	.my-swipe,.g-img{
		width: 100%;
		height: 100%;
	}
</style>