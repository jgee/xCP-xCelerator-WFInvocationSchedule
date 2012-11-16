package emc.rs;

import com.emc.xcp.services.framework.rs.AbstractObjectController;
import emc.domain.Invocation_scheduleDa_def_update_invocation_scheduleInput;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


@Controller(value = "emc.rs.Invocation_scheduleDa_def_update_invocation_scheduleInputController")
@RequestMapping(value = "/application/emc_invocation_schedules/{id}", method = RequestMethod.GET, params = "type=emc_da_def_update_invocation_schedule")
public class Invocation_scheduleDa_def_update_invocation_scheduleInputController extends AbstractObjectController<Invocation_scheduleDa_def_update_invocation_scheduleInput> {
    public Invocation_scheduleDa_def_update_invocation_scheduleInputController() {
        super(Invocation_scheduleDa_def_update_invocation_scheduleInput.class);
    }
}