import path from 'path';
import ModuleAlias from 'module-alias';

const root = path.resolve(__dirname, '..');

ModuleAlias.addAlias('~', root);
