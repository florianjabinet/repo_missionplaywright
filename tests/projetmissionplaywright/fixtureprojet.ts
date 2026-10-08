import {test as base} from '@playwright/test';
import { Header } from './POM_Acceuil';
import {Authentification, Inscription} from './POM_connexion';
import {Article} from './POM_produits';

type Fixtures = {
    header: Header;
    authentification: Authentification;
    InscriptionUser: Inscription;
    Ajoutpanier: Article;
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
    Ajoutpanier: async ({page}, use)=>{

       await use(new Article(page));
    },
});



const expect =base.expect;
 export {test, expect};