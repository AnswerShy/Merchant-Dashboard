

# Merchant-Dashboard

if u want to compile proj on own server: 
```npm run dev```

Requirements:
- [x] Implement all the pages specified in the design.
- [x] Simulate server requests with appropriate loading indicators.
- [X] Ensure the design is responsive for mobile and tablet versions.
- [X] Animations.
- [x] After logging in, redirect the user to a page that says, "Hello Luna Edge, My name is [your name]."

# Litte review

## *About "Connect to Shopify (Already Connected)"*

For check preventive connection you as tester has two ways:

 1. Compile all this project with yourself
	
	Change two variabels from on */src/pages/SignupPage*
	from
	```
	const [isShopifyConnected, setIsShopifyConnected] = useState<boolean>(false)
	let shopifyConnectedPrev: boolean = false
	```
	to
	```
	const [isShopifyConnected, setIsShopifyConnected] = useState<boolean>(true)
	let shopifyConnectedPrev: boolean = true
	```
 2. Type command in devtools

	```shopifyPrevConTest()```

![image](https://github.com/user-attachments/assets/e921932e-5a34-4e5b-a1cf-d2364bf21295)


## *About Next and Back buttons on progress bar*

I don't know if there was a need to set logic for these buttons or not. So these are just switching steps. **Just basic logic.**


## *Also i have to say sorry about a lot of deployments and a bit confusing commits*

while deploy on vercel and send message about i end my test task i misclicked and delete 4 commits in row, but i restore it and now you can see task how it look like before i was fault