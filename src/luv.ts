function load(url: string) {
    const element = document.createElement('script');
    element.src = url;
    element.type = "module";
    document.body.appendChild(element);
}

namespace Chloride {
    class Component {
        listeners = {
            render: [],
            click: [],
            mouseover: [],
            mouseout: [],
            mousemove: [],
            mouseup: [],
            mousedown: [],
            keydown: [],
            keyup: [],
            keypress: [],
            focus: [],
            blur: [],
            change: [],
            submit: [],
            reset: [],
            select: [],
            error: [],
            load: [],
            abort: [],
            loadstart: [],
            progress: [],
            suspend: [],
            resume: [],
            hashchange: [],
            message: [],
            offline: [],
            online: []
        };

        render() {
            return document.createElement('div');
        }

        on(event: string, callback: Function) {
            this.listeners[event][this.listeners[event].length + 1] = callback;
        }
    }

    function render(component: Component, parent = document.body) {
        parent.appendChild(component.render());
    }
}

class DependencyManager {
    static addDependency(url: string) {
        load(url);
    }
}

export { Chloride, DependencyManager };