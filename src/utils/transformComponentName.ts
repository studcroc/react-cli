export const transformIntoPascalCase = (componentName: string): string => {

    if(!componentName) throw 'ERROR: Pass a component name';

    let l = componentName.length;

    let res = "";

    for(let i = 0; i < l; i++){
        let ch = componentName.charAt(i);
        if(i == 0) ch = ch.toUpperCase();
        if(i !== 0 && i !== l - 1){
            let prevCh = componentName.charAt(i - 1);
            if(ch === " " || ch === "-") continue;
            if(prevCh === " " || prevCh === "-"){
                ch = ch.toUpperCase();
            }
            res += ch;
        }else{
            res += ch;
        }
    }

    return res;
};