import $ from 'jquery'

let foo = 'f';

export function get(selector) {



    return $(selector).css('color', 'red').get();
}
