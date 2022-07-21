let object = {
    title:  `Apple`,
    price:  5,
    image_url:  `https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXBwbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60`,
    description:    `apple with grey background`
}

let selection_json = JSON.stringify(object);
Cookies.set(`object`, selection_json);