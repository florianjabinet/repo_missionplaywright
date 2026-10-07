import {test,expect} from '@playwright/test'

import { faker } from '@faker-js/faker'

test('remplir formulaire avec Faker', async ({page}) => {

    await page.goto('https://practice.missionplaywright.fr/exercises/checkout-form');

  await page.getByTestId('checkout-name').fill(faker.person.firstName());

  await page.getByTestId('checkout-address').fill(faker.location.streetAddress());

  await page.getByTestId('checkout-city').fill(faker.location.city());

  await page.getByTestId('checkout-zip').fill(faker.color.rgb());

   

})