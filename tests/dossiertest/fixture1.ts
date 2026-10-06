import {test as base} from '@playwright/test';
import { FormulaireInscription } from './POM_FormulaireInscription';


type Fixtures = {
    inscription: FormulaireInscription;
};

const test = base.extend<Fixtures>({
    inscription: async ({page}, use)=>{
        
        await page.goto('https://practice.missionplaywright.fr/exercises/registration-form');
        await use(new FormulaireInscription(page));
    },
});

const expect =base.expect;
 export {test, expect};