import {container} from 'tsyringe';

import '@modules/users/providers'
import IHashProvider from './HashProvider/models/IHashProvider'
import BCryptHashProvider from './HashProvider/implementations/BCryptHashProvider'

container.registerSingleton<IHashProvider>('HashProvider', BCryptHashProvider)