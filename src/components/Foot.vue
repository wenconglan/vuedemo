<template>
	<footer>
		<div v-for="(foot,i) in foots" :key="i">
			<router-link :to="{name:foot.name}">
				<i class="iconfont" v-html="foot.icon"></i>
				<span>{{foot.txt}}</span>
				<van-tag v-if="i===3" class="hot" type="danger">8</van-tag>
			</router-link>

		</div>
	</footer>
</template> 

<script>
import {foots} from "@/utils";
export default {
	data(){
		return {
			foots
		}
	}
}
</script>

<style lang="scss" scoped>
footer{
	position:fixed;
	width:100%;
	height:45px;
	left:0;
	bottom:0;
	background:#fff;
	display:flex !important;
    z-index:100;
    border-top:1px solid #ccc;
	div{
		flex:1;
		height:45px;
		a{
			display: block;
			width:100%;
			height:100%;
			display:flex;
			flex-direction:column;
			box-sizing:border-box;
			padding:3px 0;
			text-align:center;
			font-family:"微软雅黑";
			color:#999;
			position: relative;
			i{
			width:100%;
			height:23px;
			line-height:23px;
			font-size:22px !important;
			}
			span{
				width:100%;
				height:19px;
				line-height:19px;
				font-size:14px;
			}
			.hot{
				position: absolute;
				top:0;
				left:60%;
				display: inline-block;
                width:10px;
                height:10px;
                font-size:10px;
                line-height: 10px;
                border-radius: 50%;
			}
		}
		.nav-active,.router-link-exact-active,.router-link-active{
			color:orange;
		    border-color:orange;
		}

	}
}
</style>
