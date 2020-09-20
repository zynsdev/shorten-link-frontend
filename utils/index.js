import axios from 'axios'

export async function createLink(data){    
    const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/links`, data)
    return res
}

export async function getBySlug(slug){
    const res = 0
}

export function isValidUrl(str){
    const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(str);
}