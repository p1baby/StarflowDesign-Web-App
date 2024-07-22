const baseUrl = 'https://api.telegram.org/bot7221598703:AAF6G5y1t3drGOqIEnkdV-_Z2kZeVfSrFjE';

export const sendMessage = async(message:string): Promise<void> => {
    const url = `${baseUrl}/sendMessage?chat_id=-1002243042688&text=${encodeURIComponent(message)}`;

    const response = await fetch(url);

    if(!response.ok){
        const error = await response.json();

        await Promise.reject(error.description || 'Error')
    }

    console.log('response', response);
};