package emc.rs;

import com.emc.xcp.services.framework.rs.AbstractObjectUpdateController;
import emc.domain.Invocation_scheduleDa_def_update_invocation_scheduleInput;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


@Controller(value = "emc.rs.Invocation_scheduleDa_def_update_invocation_scheduleController")
@RequestMapping(value = "/application/emc_invocation_schedules/{id}", method = RequestMethod.PUT, params = "type=emc_da_def_update_invocation_schedule")
public class Invocation_scheduleDa_def_update_invocation_scheduleController extends AbstractObjectUpdateController<Invocation_scheduleDa_def_update_invocation_scheduleInput> {
    public Invocation_scheduleDa_def_update_invocation_scheduleController() {
        super(Invocation_scheduleDa_def_update_invocation_scheduleInput.class);
    }
}