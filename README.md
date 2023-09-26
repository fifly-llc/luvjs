# LuvJS

LuvJS is a JavaScript library for everything. LuvJS includes Chloride, JSFind, and more.

## Example

```javascript
// Add LuvJS reference
import { Chloride, $ } from 'https://libjs.fifly.org/cdn/luvjs/dist/lib.min.js';

class Nav extends Chloride.Component {
    render() {
        return (
            <nav>Navbar</nav>
        );
    }
}

Chloride.render(Nav, $('.app'));
```
