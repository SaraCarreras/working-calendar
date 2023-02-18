import { iUser } from '../interfaces/iuser';
import { API_USERS_URL } from './apiURLs';

export async function getUser(): Promise<iUser> {
  try {
    const response = await fetch(API_USERS_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error('Ha ocurrido un error al obtener los datos');
  }
}

//getHolidays
