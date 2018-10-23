class Square  {
	static rootURL() {
		return "https://api.foursquare.com/v2";
	}
	static auth() {
		const keys = {
			client_id: "1MOFPSZVAUKPPKPUEQUNZJVBZRVKY4DO020P0LRVO2PBRVQ3",
			client_secret: "VQVZJ1JXPSAUUDKPBVDCZ2JYPRMNHWX2GFADXTZGIMDXRCE1",
			v: "20181022"
		}
		return Object.keys(keys).map(key => `${key}=${keys[key]}`).join("&");
	}
}
