<template>
	<div>
		<div class="flex justify-center items-center gap-24 mt-32">
			<!-- Step 1 with hover effect to show Line 5 -->
			<div class="flex flex-col items-center gap-16">
				<img src="/1.png" alt="" @mouseover="showLine(5)" @mouseleave="hideLine(5)">
				<div class="w-12 h-12 flex items-center justify-center border border-gray-300 text-gray-500 text-lg rounded-full">
					1
				</div>
			</div>

			<!-- Линия 3 -->
			<div class="absolute w-64 h-32 ml-[370px] mt-44" v-show="showLine3">
				<div class="absolute inset-0 border-t-2 border-blue-500 border-dotted rotate-30"></div>
			</div>
			<!-- Линия 1  -->
			<div class="absolute w-64 h-32 ml-[700px] mb-24" v-show="showLine1">
				<div class="absolute inset-0 border-t-2 border-blue-500 border-dotted rotate-40 two"></div>
			</div>
			<!-- Линия 2 -->
			<div class="absolute w-64 h-32 ml-[770px] mb-24" v-show="showLine2">
				<div class="absolute inset-0 border-t-2 border-blue-500 border-dotted rotate-50 sec"></div>
			</div>
			<!-- Линия 4  -->
			<div class="absolute w-32 h-32 ml-[500px] mt-[130px]" v-show="showLine4">
				<div class="absolute inset-0 border-t-2 border-blue-500 border-dotted rotate-50 four"></div>
			</div>
			<!-- Линия 5  -->
			<div class="absolute w-32 h-32 left-[380px] mb-24" v-show="showLine5">
				<div class="absolute inset-0 border-t-2 border-blue-500 border-dotted rotate-50 rec"></div>
			</div>
			<!-- Линия 6  -->
			<div class="absolute w-32 h-32 left-[700px] mt-36" v-show="showLine6">
				<div class="absolute inset-0 border-t-2 border-blue-500 border-dotted rotate-50 tec"></div>
			</div>

			
			<div class="flex flex-col items-center gap-16">
				<img src="/2.png" alt="" @mouseover="showLine(6)" @mouseleave="hideLine(6)">
				<div class="w-12 h-12 flex items-center justify-center border border-gray-300 text-gray-500 text-lg rounded-full">
					2
				</div>
			</div>

			<div class="flex gap-32">
				<img src="/smn.png" alt="" @mouseover="showLine(4)" @mouseleave="hideLine(4)">
				<img src="/road.png" alt="">
			</div>

			
			<img src="/bpr.png" alt="" class="w-24 h-24 mb-64 absolute right-[470px]"
				@mouseover="showLine(1); showInfo('bpr')" @mouseleave="hideLine(1); hideInfo('bpr')">
			<div class="absolute right-[470px] top-[40px] bg-gray-100 p-4 rounded shadow-lg" v-show="showBprInfo">
				<div class="flex flex-col bg-gray-50 p-4 rounded-lg shadow-md w-64">
					<p class="text-gray-800 font-semibold text-lg mb-2">Անուն</p>
					<p class="text-gray-800 font-semibold text-lg">Ազգանուն</p>
				</div>
			</div>

			
			<img src="/geo.png" alt="" class="absolute right-[470px] mt-64"
				@mouseover="showLine(3); showInfo('geo')" @mouseleave="hideLine(3); hideInfo('geo')">
			<div class="absolute right-[470px] top-[570px] bg-gray-100 p-4 rounded shadow-lg" v-show="showGeoInfo">
				<p>Գտնվելու վայր տվյալ պահին</p>
			</div>

			<p class="absolute font-bold text-xl right-[440px] mt-[350px]">Գեոպորտալ</p>

			
			<p class="w-12 h-12 flex items-center justify-center border border-gray-300 text-gray-500 text-lg rounded-full absolute right-[480px] mt-[590px]">
				3
			</p>

			
			<div class="flex flex-col items-center gap-16">
				<img src="/4.png" alt="" @mouseover="showInfo('four')" @mouseleave="hideInfo('four')">
				<div class="w-12 h-12 flex items-center justify-center border border-green-500 text-green-500 text-lg rounded-full">
					4
				</div>
			</div>

			<div class="absolute -right-8 transform -translate-x-1/2 top-[500px] bg-gray-100 p-4 rounded shadow-lg" v-show="showFourInfo">
				<div class="p-6 bg-gray-100 rounded-lg shadow-lg w-64">
					<p class="text-blue-600 font-semibold text-xl mb-4">Լիցենզիա</p>
					<div class="bg-white p-4 rounded-md shadow-sm">
						<p class="text-gray-700 font-medium">Տրված է․ <span class="font-normal text-gray-500">[Նարեկ Մադաթյան]</span></p>
						<p class="text-gray-700 font-medium mt-2">Վավեր է․ <span class="font-normal text-gray-500">[11․11․2030]</span></p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			showLine1: false,
			showLine2: false,
			showLine3: false,
			showLine4: false,
			showLine5: false,
			showLine6: false,
			showBprInfo: false,
			showGeoInfo: false,
			showFourInfo: false
		};
	},
	methods: {
		showLine(line) {
			this[`showLine${line}`] = true;
		},
		hideLine(line) {
			this[`showLine${line}`] = false;
		},
		showInfo(item) {
			this[`show${item.charAt(0).toUpperCase() + item.slice(1)}Info`] = true;
		},
		hideInfo(item) {
			this[`show${item.charAt(0).toUpperCase() + item.slice(1)}Info`] = false;
		}
	}
};
</script>

<style scoped>
.rotate-30 {
	transform: rotate(30deg);
	transform-origin: top left;
}

.two {
	transform: rotate(150deg);
	transform-origin: top left;
}

.sec {
	transform: rotate(90deg);
	transform-origin: top left;
}

.four {
	transform: rotate(180deg);
	transform-origin: top left;
}

.rec {
	transform: rotate(150deg);
	transform-origin: top left;
}

.tec {
	transform: rotate(160deg);
	transform-origin: top left;
}
</style>

