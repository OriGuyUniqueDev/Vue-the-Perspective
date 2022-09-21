const vm = Vue.createApp({
	data() {
		return {
			perspectiveVal: 150,
			rotateX: 0,
			rotateY: 0,
			rotateZ: 0,
			showOnMobile: navigator.userAgentData.mobile,
			showOnDesktop: !navigator.userAgentData.mobile
		};
	},
	computed: {
		styleChangeByInput() {
			return {
				transform: `
                perspective(${this.perspectiveVal}px)
                rotateX(${this.rotateX}deg)
                rotateY(${this.rotateY}deg)
                rotateZ(${this.rotateZ}deg)
                `,
			};
		},
	},
	methods: {
		reset () {
            this.perspectiveVal = 150
            this.rotateX = 0
            this.rotateY = 0
            this.rotateZ = 0
        },
		copyToClip() {
			navigator.clipboard.writeText(`transform: ${this.styleChangeByInput.transform}`)
			alert('📎 Copy To Clipboard 📎')
		}
	},
});
/* add message for mobile responsive */ 
vm.mount("#app");
