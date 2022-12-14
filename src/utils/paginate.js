import _ from '../../node_modules/lodash';
export function paginate(items,pageNumber,pageSize){
    const startIndex=(pageNumber-1)*pageSize;
    return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
}