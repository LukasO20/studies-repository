import $ from 'jquery'

const loadHTMLSuccessCallbacks = []

export function onLoadHtmlSuccess(callback) {
    if (!loadHTMLSuccessCallbacks.includes(callback)) {
        loadHTMLSuccessCallbacks.push(callback)
    }
}

function loadIncludes(parent) {
    if(!parent) parent = 'body'
    $(parent).find('[wm-include]').each(function (i, e) {
        const url = $(e).attr('wm-include')
        $.ajax({
            url, 
            success(data) {
                $(e).html(data)
                $(e).removeAttr('wm-include')

                loadHTMLSuccessCallbacks.forEach(callback => callback(data))
                loadIncludes(e)
            }
        })
    })
}

loadIncludes()