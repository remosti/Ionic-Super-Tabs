/* tslint:disable */
import { fromEvent } from 'rxjs';
export const proxyInputs = (Cmp, inputs) => {
    const Prototype = Cmp.prototype;
    inputs.forEach(item => {
        Object.defineProperty(Prototype, item, {
            get() { return this.el[item]; },
            set(val) { this.z.runOutsideAngular(() => (this.el[item] = val)); }
        });
    });
};
export const proxyMethods = (Cmp, methods) => {
    const Prototype = Cmp.prototype;
    methods.forEach(methodName => {
        Prototype[methodName] = function () {
            const args = arguments;
            return this.z.runOutsideAngular(() => this.el[methodName].apply(this.el, args));
        };
    });
};
export const proxyOutputs = (instance, el, events) => {
    events.forEach(eventName => instance[eventName] = fromEvent(el, eventName));
};
// tslint:disable-next-line: only-arrow-functions
export function ProxyCmp(opts) {
    const decorator = function (cls) {
        if (opts.inputs) {
            proxyInputs(cls, opts.inputs);
        }
        if (opts.methods) {
            proxyMethods(cls, opts.methods);
        }
        return cls;
    };
    return decorator;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJveGllcy11dGlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25pYy1zdXBlci10YWJzL2FuZ3VsYXIvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL3Byb3hpZXMtdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFakMsTUFBTSxDQUFDLE1BQU0sV0FBVyxHQUFHLENBQUMsR0FBUSxFQUFFLE1BQWdCLEVBQUUsRUFBRTtJQUN4RCxNQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDO0lBQ2hDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDcEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFO1lBQ3JDLEdBQUcsS0FBSyxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9CLEdBQUcsQ0FBQyxHQUFRLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDekUsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxZQUFZLEdBQUcsQ0FBQyxHQUFRLEVBQUUsT0FBaUIsRUFBRSxFQUFFO0lBQzFELE1BQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUM7SUFDaEMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUMzQixTQUFTLENBQUMsVUFBVSxDQUFDLEdBQUc7WUFDdEIsTUFBTSxJQUFJLEdBQUcsU0FBUyxDQUFDO1lBQ3ZCLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDbEYsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxZQUFZLEdBQUcsQ0FBQyxRQUFhLEVBQUUsRUFBTyxFQUFFLE1BQWdCLEVBQUUsRUFBRTtJQUN2RSxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQztBQUM5RSxDQUFDLENBQUE7QUFFRCxpREFBaUQ7QUFDakQsTUFBTSxVQUFVLFFBQVEsQ0FBQyxJQUFxQztJQUM1RCxNQUFNLFNBQVMsR0FBSSxVQUFTLEdBQVE7UUFDbEMsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsV0FBVyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDL0I7UUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsWUFBWSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDakM7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUMsQ0FBQztJQUNGLE9BQU8sU0FBUyxDQUFDO0FBQ25CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuaW1wb3J0IHsgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBjb25zdCBwcm94eUlucHV0cyA9IChDbXA6IGFueSwgaW5wdXRzOiBzdHJpbmdbXSkgPT4ge1xuICBjb25zdCBQcm90b3R5cGUgPSBDbXAucHJvdG90eXBlO1xuICBpbnB1dHMuZm9yRWFjaChpdGVtID0+IHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUHJvdG90eXBlLCBpdGVtLCB7XG4gICAgICBnZXQoKSB7IHJldHVybiB0aGlzLmVsW2l0ZW1dOyB9LFxuICAgICAgc2V0KHZhbDogYW55KSB7IHRoaXMuei5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiAodGhpcy5lbFtpdGVtXSA9IHZhbCkpOyB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHByb3h5TWV0aG9kcyA9IChDbXA6IGFueSwgbWV0aG9kczogc3RyaW5nW10pID0+IHtcbiAgY29uc3QgUHJvdG90eXBlID0gQ21wLnByb3RvdHlwZTtcbiAgbWV0aG9kcy5mb3JFYWNoKG1ldGhvZE5hbWUgPT4ge1xuICAgIFByb3RvdHlwZVttZXRob2ROYW1lXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICByZXR1cm4gdGhpcy56LnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuZWxbbWV0aG9kTmFtZV0uYXBwbHkodGhpcy5lbCwgYXJncykpO1xuICAgIH07XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHByb3h5T3V0cHV0cyA9IChpbnN0YW5jZTogYW55LCBlbDogYW55LCBldmVudHM6IHN0cmluZ1tdKSA9PiB7XG4gIGV2ZW50cy5mb3JFYWNoKGV2ZW50TmFtZSA9PiBpbnN0YW5jZVtldmVudE5hbWVdID0gZnJvbUV2ZW50KGVsLCBldmVudE5hbWUpKTtcbn1cblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBvbmx5LWFycm93LWZ1bmN0aW9uc1xuZXhwb3J0IGZ1bmN0aW9uIFByb3h5Q21wKG9wdHM6IHsgaW5wdXRzPzogYW55OyBtZXRob2RzPzogYW55IH0pIHtcbiAgY29uc3QgZGVjb3JhdG9yID0gIGZ1bmN0aW9uKGNsczogYW55KXtcbiAgICBpZiAob3B0cy5pbnB1dHMpIHtcbiAgICAgIHByb3h5SW5wdXRzKGNscywgb3B0cy5pbnB1dHMpO1xuICAgIH1cbiAgICBpZiAob3B0cy5tZXRob2RzKSB7XG4gICAgICBwcm94eU1ldGhvZHMoY2xzLCBvcHRzLm1ldGhvZHMpO1xuICAgIH1cbiAgICByZXR1cm4gY2xzO1xuICB9O1xuICByZXR1cm4gZGVjb3JhdG9yO1xufVxuIl19