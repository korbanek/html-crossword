/**
 * @class Model
 * 
 * Html model handler
 * 
 * @param {string} html - Html model
 */
function Model(html)
{
    var that = this;
    this.html = html;
    this.element = this.createHTMLElement(html);

    // Assing Model events into element
    Model.eventList.forEach(function(event){
        that.element.addEventListener(event, that[event].bind(that), false);
    });
}

/**
 * Model events rewrite
 */
Model.eventList = [
    'keydown',
    'keyup',
    'keypress',
    'click',
    'blur',
    'focus'
];

Model.prototype = {
    /**
     * Draw element
     */
    draw: function(element)
    {
        element.appendChild(this.element);
    },
    /**
     * @param {Model} model - model to append to 
     */
    appendTo: function(model)
    {
        if(typeof model != 'undefined')
        {
            model.element.appendChild(this.element);
        }
    },
    /**
     * Creates DOM Element from html string
     * 
     * @param {string} htmlString - representative of Model html string
     */
    createHTMLElement: function(htmlString)
    {
        this.uid = Crossword.uid++;

        var div = document.createElement('div');
        div.innerHTML = htmlString.trim();

        div.firstChild.id = Crossword.prefix + this.uid;

        return div.firstChild;
    },
    /**
     * Keyup method
     * Default javascript event representative
     * 
     * @abstract
     * @return {boolean}
     */
    keyup: function(e)
    {
        // Should be implemented by subclass.
    },
    /**
     * Keydown method
     * Default javascript event representative
     * 
     * @abstract
     * @return {boolean}
     */
    keydown: function(e)
    {
        // Should be implemented by subclass.
    },
    /**
     * Keypress method
     * Default javascript event representative
     * 
     * @abstract
     * @return {boolean}
     */
    keypress: function(e)
    {
        // Should be implemented by subclass.
    },
    /**
     * Click method
     * Default javascript event representative
     * 
     * @abstract
     * @return {boolean}
     */
    click: function(e)
    {
        // Should be implemented by subclass.
    },
    /**
     * Focus method
     * Default javascript event representative
     * 
     * @abstract
     * @return {boolean}
     */
    focus: function(e)
    {
        // Should be implemented by subclass.
    },
    /**
     * Blur method
     * Default javascript event representative
     * 
     * @abstract
     * @return {boolean}
     */
    blur: function()
    {
        // Should be implemented by subclass.
    }
}