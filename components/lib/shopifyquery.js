// export async function Storefront(query, variables = {}) {
//     const response = await fetch(process.env.SHOPIFY_STORE_API_URL, {
//         method: 'POST',
//         headers: {
//             'Content-type': 'application/json',
//             'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
//         },
//         body: JSON.stringify({ query, variables }),
//     })
//     // return response.json()
//     console.log(response.json())
//     return (<p>hi, i am from shopify query.</p>)
// }



export async function Storefront(query, variables = {}) {
    const response = await fetch(process.env.SHOPIFY_STORE_API_URL, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
        },
        body: JSON.stringify({ query, variables }),
    })
    return response.json()
}

export async function Getproduts() {
    const query = `
    query Products {
        products(first: 6) {
          edges {
            node {
              handle
              images(first: 6) {
                edges {
                  node {
                    altText
                    transformedSrc
                  }
                }
              }
              title
              tags
            }
          }
        }
      }`
    
    const response = await Storefront(query);
    console.log(response.data.type);
    return (<p>hi, i am from shopify query.</p>)
}