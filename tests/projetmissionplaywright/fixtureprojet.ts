import {test as base} from '@playwright/test';
import { Header } from './POM_Acceuil';
import {Authentification, Inscription} from './POM_connexion';


type Fixtures = {
    header: Header;
    authentification: Authentification;
    InscriptionUser: Inscription;
};

const test = base.extend<Fixtures>({
    header: async ({page}, use) => {
        await use(new Header(page));
    },
    authentification: async ({page}, use) => {
        await use(new Authentification(page));
    },
    InscriptionUser: async ({page}, use)=>{

       await use(new Inscription(page));
    },
});



const expect =base.expect;
 export {test, expect};