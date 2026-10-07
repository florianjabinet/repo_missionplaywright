import {test as base} from '@playwright/test';
import { Header } from './POM_Acceuil';
import {Authentification, Inscription} from './POM_connexion';


type Fixtures = {
    InscriptionUser: Inscription;
};

const test = base.extend<Fixtures>({
    InscriptionUser: async ({page}, use)=>{
        
       await use(new Inscription(page));
    },
});

const expect =base.expect;
 export {test, expect};