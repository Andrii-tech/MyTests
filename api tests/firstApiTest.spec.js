import {test, expect} from '@playwright/test'

test ('get product', async ({request}) => {
    const response = await request.get('https://dummyjson.com/products');
    expect(response).toBeOK
    console.log(response)
})

