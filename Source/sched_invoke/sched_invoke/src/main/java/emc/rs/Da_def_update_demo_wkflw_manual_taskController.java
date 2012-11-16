package emc.rs;

import com.emc.xcp.services.task.rs.AbstractUpdateTaskActionController;
import emc.domain.Da_def_update_demo_wkflw_manual_taskDomain;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


@Controller(value = "emc.rs.Da_def_update_demo_wkflw_manual_taskController")
@RequestMapping(value = "/application/tasks/{id}/update", method = RequestMethod.PUT, params = "type=emc_da_def_update_demo_wkflw_manual_task")
public class Da_def_update_demo_wkflw_manual_taskController extends AbstractUpdateTaskActionController<Da_def_update_demo_wkflw_manual_taskDomain> {
    public Da_def_update_demo_wkflw_manual_taskController() {
        super(Da_def_update_demo_wkflw_manual_taskDomain.class);
    }
}