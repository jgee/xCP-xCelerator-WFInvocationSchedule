package emc.rs;

import com.emc.xcp.services.task.rs.AbstractViewTaskController;
import emc.domain.Demo_wkflw_manual_taskDomain;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


@Controller(value = "emc.rs.Demo_wkflw_manual_taskController")
@RequestMapping(value = "/application/tasks/{id}", method = RequestMethod.GET, params = "type=demo_wkflw_manual_task")
public class Demo_wkflw_manual_taskController extends AbstractViewTaskController<Demo_wkflw_manual_taskDomain> {
    public Demo_wkflw_manual_taskController() {
        super(Demo_wkflw_manual_taskDomain.class);
    }
}