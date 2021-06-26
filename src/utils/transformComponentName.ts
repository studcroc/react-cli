export const transformIntoPascalCase = (componentName: string): string => {

    let l = componentName.length;

    let res = "";

    for(let i = 0; i < l; i++){
        let ch = componentName.charAt(i);
        if(i == 0) ch = ch.toUpperCase();
        if(i !== 0 && i !== l - 1){
            let prevCh = componentName.charAt(i - 1);
            if(ch === " " || ch === "-" || ch === "_") continue;
            if(prevCh === " " || prevCh === "-" || prevCh === "_"){
                ch = ch.toUpperCase();
            }
            res += ch;
        }else{
            res += ch;
        }
    }

    return res;
};