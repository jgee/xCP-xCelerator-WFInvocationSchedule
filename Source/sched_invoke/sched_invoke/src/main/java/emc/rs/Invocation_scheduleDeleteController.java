package emc.rs;

import com.emc.xcp.services.framework.rs.AbstractObjectDeleteController;
import emc.domain.Invocation_scheduleDeleteInput;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


@Controller(value = "emc.rs.Invocation_scheduleDeleteController")
@RequestMapping(value = "/application/emc_invocation_schedules/{id}", method = RequestMethod.DELETE)
public class Invocation_scheduleDeleteController extends AbstractObjectDeleteController<Invocation_scheduleDeleteInput> {
    public Invocation_scheduleDeleteController() {
        super(Invocation_scheduleDeleteInput.class);
    }
}