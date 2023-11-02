
export function isVowel(chr:string):boolean{
    chr = chr.toString();
    if(chr === 'a' || chr==='o' || chr==='u' || chr === 'e' || chr === 'i'){
        return true;
    }
    return false;
}