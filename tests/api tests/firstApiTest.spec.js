import {test, expect} from '@playwright/test'

test.skip ('get product', async ({request}) => {
    const response = await request.get('/products/1');
    expect(response).toBeOK
    console.log(response)
})

test ('search for products', async ({request}) => {
    const response = await request.get('/products', {
        params:{
            limit:10,
            skip: 10,
            select: "title"
        }
    });
    console.log(await response.json())

    expect(response).toBeOK();

})

