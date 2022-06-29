import {AuthRoutes} from './routes';
import {RouteStrings} from '~config/strings/routes';

interface RouteTitle {
  [key: string]: RouteStrings;
}

export const ROUTES_TITLE: RouteTitle = {
  [AuthRoutes.Login]: RouteStrings.Login,
  [AuthRoutes.Registration]: RouteStrings.Registration,
};
