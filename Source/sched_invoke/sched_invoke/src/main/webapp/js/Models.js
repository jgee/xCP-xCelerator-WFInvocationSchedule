
Ext.define("emc_invocation_schedule",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/emc_invocation_schedules"
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "configuration_name",
        "type" : "string"
      }, {
        "name" : "process_name",
        "type" : "string"
      }, {
        "name" : "next_invocation_time",
        "type" : "string"
      }, {
        "name" : "frequency_picklist",
        "type" : "string"
      }, {
        "name" : "is_active",
        "useNull" : true,
        "type" : "boolean"
      }, {
        "name" : "package_delivery",
        "type" : "string"
      }, {
        "name" : "package_query",
        "type" : "string"
      }, {
        "name" : "is_being_processed",
        "useNull" : true,
        "type" : "boolean"
      }, {
        "name" : "last_workflow_started",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("emc_invocation_schedule_template",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/emc_invocation_schedules/template"
      },
      "fields" : [ {
        "name" : "configuration_name",
        "type" : "string"
      }, {
        "name" : "process_name",
        "type" : "string"
      }, {
        "name" : "next_invocation_time",
        "type" : "string"
      }, {
        "name" : "frequency_picklist",
        "type" : "string"
      }, {
        "name" : "is_active",
        "useNull" : true,
        "type" : "boolean"
      }, {
        "name" : "package_delivery",
        "type" : "string"
      }, {
        "name" : "package_query",
        "type" : "string"
      }, {
        "name" : "is_being_processed",
        "useNull" : true,
        "type" : "boolean"
      }, {
        "name" : "last_workflow_started",
        "type" : "string"
      }, {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_RootBO",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/xcp_RootBOs"
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_RootBO_template",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/xcp_RootBOs/template"
      },
      "fields" : [ {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_dm_folder",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_folders"
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "authors",
        "type" : "array"
      }, {
        "name" : "keywords",
        "type" : "array"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      }, {
        "name" : "r_version_label",
        "type" : "array"
      }, {
        "name" : "r_lock_owner",
        "type" : "string"
      }, {
        "name" : "r_lock_date",
        "type" : "string"
      }, {
        "name" : "r_folder_path",
        "type" : "array"
      }, {
        "name" : "r_link_cnt",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      }, "links" ]
    }
);

Ext.define("xcp_folderlist_0",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "type" : "xcp_rest_folder",
        "url" : "application/xcp_dm_folders"
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "authors",
        "type" : "array"
      }, {
        "name" : "keywords",
        "type" : "array"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      }, {
        "name" : "r_version_label",
        "type" : "array"
      }, {
        "name" : "r_lock_owner",
        "type" : "string"
      }, {
        "name" : "r_lock_date",
        "type" : "string"
      }, {
        "name" : "r_folder_path",
        "type" : "array"
      }, {
        "name" : "r_link_cnt",
        "type" : "int"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      }, {
        "name" : "icon",
        "type" : "string"
      }, "links" ]
    }
);

Ext.define("xcp_dm_document",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_documents"
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "owner_name",
        "type" : "string"
      }, {
        "name" : "a_status",
        "type" : "string"
      }, {
        "name" : "a_content_type",
        "type" : "string"
      }, {
        "name" : "authors",
        "type" : "array"
      }, {
        "name" : "keywords",
        "type" : "array"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      }, {
        "name" : "r_lock_owner",
        "type" : "string"
      }, {
        "name" : "r_lock_date",
        "type" : "string"
      }, {
        "name" : "r_version_label",
        "type" : "array"
      }, {
        "name" : "i_chronicle_id",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      }, "links" ]
    }
);

Ext.define("xcp_currenttask",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "act_name",
        "type" : "string"
      }, {
        "name" : "qitem_id",
        "type" : "string"
      }, {
        "name" : "creation_date",
        "type" : "string"
      }, {
        "name" : "due_date",
        "type" : "string"
      }, {
        "name" : "performer",
        "type" : "string"
      }, {
        "name" : "performer_address",
        "type" : "string"
      }, {
        "name" : "priority",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "state",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "name",
        "type" : "string"
      }, {
        "name" : "task_subject",
        "type" : "string"
      }, {
        "name" : "queue_name",
        "type" : "string"
      }, {
        "name" : "instructions",
        "type" : "string"
      }, {
        "name" : "description",
        "type" : "string"
      }, {
        "name" : "received_date",
        "type" : "string"
      }, {
        "name" : "received_from",
        "type" : "string"
      }, {
        "name" : "requirements",
        "type" : "string"
      }, {
        "name" : "isdelegable",
        "useNull" : true,
        "type" : "boolean"
      }, {
        "name" : "isrepeatable",
        "useNull" : true,
        "type" : "boolean"
      } ]
    }
);

Ext.define("xcp_taskworkflow",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "correlation_identifier",
        "type" : "string"
      }, {
        "name" : "process_id",
        "type" : "string"
      }, {
        "name" : "r_creater_name",
        "type" : "string"
      }, {
        "name" : "r_start_date",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "r_runtime_state",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "supervisor_name",
        "type" : "string"
      }, {
        "name" : "supervisor_address",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_ExecutionData",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "currenttask",
        "type" : "xcp_currenttask"
      }, {
        "name" : "taskworkflow",
        "type" : "xcp_taskworkflow"
      } ]
    }
);

Ext.define("xcp_queue_list_initiate_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "queuelist",
        "type" : "array"
      } ]
    }
);

Ext.define("xcp_queue_list_initiate_template",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "data" : {
          "processPackages" : {
          },
          "processVariables" : {
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_queue_list_initiate_processVariables"
      } ]
    }
);

Ext.define("xcp_activity_list_initiate_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "act_name",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "output_activity_names",
        "type" : "array"
      }, {
        "name" : "port_type",
        "type" : "string"
      }, {
        "name" : "process_id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_activity_list_initiate_template",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "data" : {
          "processPackages" : {
          },
          "processVariables" : {
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_activity_list_initiate_processVariables"
      } ]
    }
);

Ext.define("xcp_taskhistory_initiate_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "activity_name",
        "type" : "array"
      }, {
        "name" : "date",
        "type" : "array"
      }, {
        "name" : "performer",
        "type" : "array"
      }, {
        "name" : "process_instance_id",
        "type" : "string"
      }, {
        "name" : "status",
        "type" : "array"
      } ]
    }
);

Ext.define("xcp_taskhistory_initiate_template",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "data" : {
          "processPackages" : {
          },
          "processVariables" : {
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_taskhistory_initiate_processVariables"
      } ]
    }
);

Ext.define("emc_workflow_invocation_initiate_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "component_ids",
        "type" : "array"
      }, {
        "name" : "package_names",
        "type" : "array"
      } ]
    }
);

Ext.define("emc_workflow_invocation_initiate_processPackages",
    {
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "invoke_schedule",
        "type" : "emc_invocation_schedule_template"
      } ]
    }
);

Ext.define("emc_workflow_invocation_initiate_template",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "data" : {
          "processPackages" : {
            "invoke_schedule" : {
            }
          },
          "processVariables" : {
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "emc_workflow_invocation_initiate_processVariables"
      }, {
        "name" : "processPackages",
        "type" : "emc_workflow_invocation_initiate_processPackages"
      } ]
    }
);

Ext.define("emc_demo_wkflw_initiate_template",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "data" : {
          "processPackages" : {
          },
          "processVariables" : {
          }
        },
        "type" : "memory"
      },
      "fields" : [ ]
    }
);

Ext.define("emc_demo_wkflw_manual_task",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/tasks",
        "extraParams" : {
          "type" : "demo_wkflw_manual_task"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "executionData",
        "type" : "xcp_ExecutionData"
      }, {
        "name" : "attachments",
        "type" : "array"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_user_from_queue_initiate_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "queue_name",
        "type" : "string"
      }, {
        "name" : "user_list",
        "type" : "array"
      } ]
    }
);

Ext.define("xcp_user_from_queue_initiate_template",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "data" : {
          "processPackages" : {
          },
          "processVariables" : {
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_user_from_queue_initiate_processVariables"
      } ]
    }
);

Ext.define("emc_query_for_processes_initiate_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "processes",
        "type" : "array"
      } ]
    }
);

Ext.define("emc_query_for_processes_initiate_template",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "data" : {
          "processPackages" : {
          },
          "processVariables" : {
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "emc_query_for_processes_initiate_processVariables"
      } ]
    }
);

Ext.define("xcp_userorgroup_selecti_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "user_group_name",
        "type" : "array"
      } ]
    }
);

Ext.define("xcp_userorgroup_selecti_template",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "data" : {
          "processPackages" : {
          },
          "processVariables" : {
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_userorgroup_selecti_processVariables"
      } ]
    }
);

Ext.define("emc_da_def_create_query_for_processes_initiate_processVariables",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "processes",
        "type" : "array"
      } ]
    }
);

Ext.define("emc_da_def_create_query_for_processes_initiate",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/emc_query_for_processes",
        "extraParams" : {
          "type" : "emc_da_def_create_query_for_processes_initiate"
        }
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "emc_da_def_create_query_for_processes_initiate_processVariables"
      }, {
        "name" : "attachments",
        "type" : "array"
      } ]
    }
);

Ext.define("emc_da_def_create_workflow_invocation_initiate_invoke_schedule",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "configuration_name",
        "type" : "string"
      }, {
        "name" : "frequency_picklist",
        "type" : "string"
      }, {
        "name" : "is_being_processed",
        "type" : "boolean"
      }, {
        "name" : "is_active",
        "type" : "boolean"
      }, {
        "name" : "last_workflow_started",
        "type" : "string"
      }, {
        "name" : "next_invocation_time",
        "type" : "string"
      }, {
        "name" : "package_delivery",
        "type" : "string"
      }, {
        "name" : "package_query",
        "type" : "string"
      }, {
        "name" : "process_name",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("emc_da_def_create_workflow_invocation_initiate_processPackages",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "invoke_schedule",
        "type" : "emc_da_def_create_workflow_invocation_initiate_invoke_schedule"
      } ]
    }
);

Ext.define("emc_da_def_create_workflow_invocation_initiate_processVariables",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "component_ids",
        "type" : "array"
      }, {
        "name" : "package_names",
        "type" : "array"
      } ]
    }
);

Ext.define("emc_da_def_create_workflow_invocation_initiate",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/emc_workflow_invocation",
        "extraParams" : {
          "type" : "emc_da_def_create_workflow_invocation_initiate"
        }
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "emc_da_def_create_workflow_invocation_initiate_processVariables"
      }, {
        "name" : "processPackages",
        "type" : "emc_da_def_create_workflow_invocation_initiate_processPackages"
      }, {
        "name" : "attachments",
        "type" : "array"
      } ]
    }
);

Ext.define("emc_da_def_create_demo_wkflw_initiate",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/emc_demo_wkflw",
        "extraParams" : {
          "type" : "emc_da_def_create_demo_wkflw_initiate"
        }
      },
      "fields" : [ {
        "name" : "attachments",
        "type" : "array"
      } ]
    }
);

Ext.define("emc_da_def_repeat_demo_wkflw_manual_task",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/tasks/{id}/repeat",
        "extraParams" : {
          "type" : "emc_da_def_repeat_demo_wkflw_manual_task"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "attachments",
        "type" : "array"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "userName",
        "type" : "array"
      } ]
    }
);

Ext.define("emc_da_def_update_demo_wkflw_manual_task",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/tasks/{id}/update",
        "extraParams" : {
          "type" : "emc_da_def_update_demo_wkflw_manual_task"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "attachments",
        "type" : "array"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("emc_da_def_complete_demo_wkflw_manual_task",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/tasks/{id}/complete",
        "extraParams" : {
          "type" : "emc_da_def_complete_demo_wkflw_manual_task"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "attachments",
        "type" : "array"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("emc_da_def_delegate_demo_wkflw_manual_task",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/tasks/{id}/delegate",
        "extraParams" : {
          "type" : "emc_da_def_delegate_demo_wkflw_manual_task"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "attachments",
        "type" : "array"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "userName",
        "type" : "array"
      } ]
    }
);

Ext.define("emc_da_def_create_invocation_schedule",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/emc_invocation_schedules",
        "extraParams" : {
          "type" : "emc_da_def_create_invocation_schedule"
        }
      },
      "fields" : [ {
        "name" : "configuration_name",
        "type" : "string"
      }, {
        "name" : "frequency_picklist",
        "type" : "string"
      }, {
        "name" : "is_being_processed",
        "type" : "boolean"
      }, {
        "name" : "is_active",
        "type" : "boolean"
      }, {
        "name" : "last_workflow_started",
        "type" : "string"
      }, {
        "name" : "next_invocation_time",
        "type" : "string"
      }, {
        "name" : "package_delivery",
        "type" : "string"
      }, {
        "name" : "package_query",
        "type" : "string"
      }, {
        "name" : "process_name",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      } ]
    }
);

Ext.define("emc_da_def_update_invocation_schedule",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/emc_invocation_schedules",
        "extraParams" : {
          "type" : "emc_da_def_update_invocation_schedule"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "configuration_name",
        "type" : "string"
      }, {
        "name" : "frequency_picklist",
        "type" : "string"
      }, {
        "name" : "is_being_processed",
        "type" : "boolean"
      }, {
        "name" : "is_active",
        "type" : "boolean"
      }, {
        "name" : "last_workflow_started",
        "type" : "string"
      }, {
        "name" : "next_invocation_time",
        "type" : "string"
      }, {
        "name" : "package_delivery",
        "type" : "string"
      }, {
        "name" : "package_query",
        "type" : "string"
      }, {
        "name" : "process_name",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      } ]
    }
);

Ext.define("emc_da_def_delete_invocation_schedule",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/emc_invocation_schedules",
        "extraParams" : {
          "type" : "emc_da_def_delete_invocation_schedule"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_da_def_create_rootbo",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_RootBOs",
        "extraParams" : {
          "type" : "xcp_da_def_create_rootbo"
        }
      },
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_da_def_update_rootbo",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_RootBOs",
        "extraParams" : {
          "type" : "xcp_da_def_update_rootbo"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_da_def_delete_rootbo",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_RootBOs",
        "extraParams" : {
          "type" : "xcp_da_def_delete_rootbo"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_da_def_selector_rootbo",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_RootBOs",
        "extraParams" : {
          "type" : "xcp_da_def_selector_rootbo"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "selection",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_da_def_create_dm_folder",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_folders",
        "extraParams" : {
          "type" : "xcp_da_def_create_dm_folder"
        }
      },
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_da_def_update_dm_folder",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_folders",
        "extraParams" : {
          "type" : "xcp_da_def_update_dm_folder"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_da_def_delete_dm_folder",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_folders",
        "extraParams" : {
          "type" : "xcp_da_def_delete_dm_folder"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_da_def_import_dm_document",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_documents",
        "extraParams" : {
          "type" : "xcp_da_def_import_dm_document"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      }, {
        "name" : "a_content_type",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_da_def_update_dm_document",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_documents",
        "extraParams" : {
          "type" : "xcp_da_def_update_dm_document"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_da_def_delete_dm_document",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_documents",
        "extraParams" : {
          "type" : "xcp_da_def_delete_dm_document"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_content_rt_query_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_documents",
        "extraParams" : {
          "type" : "xcp_content_rt_query"
        }
      },
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "a_content_type",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_lock_date",
        "type" : "string"
      }, {
        "name" : "r_lock_owner",
        "type" : "string"
      }, {
        "name" : "r_version_label",
        "type" : "array"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("emc_scheduled_workflows_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/emc_invocation_schedules",
        "extraParams" : {
          "type" : "emc_scheduled_workflows"
        }
      },
      "fields" : [ {
        "name" : "process_name",
        "type" : "string"
      }, {
        "name" : "next_invocation_time",
        "type" : "string"
      }, {
        "name" : "is_active",
        "type" : "boolean"
      }, {
        "name" : "package_delivery",
        "type" : "string"
      }, {
        "name" : "package_query",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_folder_rt_query_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_folders",
        "extraParams" : {
          "type" : "xcp_folder_rt_query"
        }
      },
      "fields" : [ {
        "name" : "r_lock_owner",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_queue_list_initiate_staless_ds_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/xcp_queue_list_initiate",
        "extraParams" : {
          "type" : "xcp_queue_list_initiate_staless_ds"
        }
      },
      "fields" : [ {
        "name" : "queuelist",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_taskhistory_initiate_staless_ds_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/xcp_taskhistory_initiate",
        "extraParams" : {
          "type" : "xcp_taskhistory_initiate_staless_ds"
        }
      },
      "fields" : [ {
        "name" : "activity_name",
        "type" : "string"
      }, {
        "name" : "date",
        "type" : "string"
      }, {
        "name" : "performer",
        "type" : "string"
      }, {
        "name" : "status",
        "type" : "int"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_user_from_queue_initiate_staless_ds_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/xcp_user_from_queue_initiate",
        "extraParams" : {
          "type" : "xcp_user_from_queue_initiate_staless_ds"
        }
      },
      "fields" : [ {
        "name" : "user_list",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_userorgroup_selecti_staless_ds_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/xcp_userorgroup_selecti",
        "extraParams" : {
          "type" : "xcp_userorgroup_selecti_staless_ds"
        }
      },
      "fields" : [ {
        "name" : "user_group_name",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("emc_query_for_processes_initiate_staless_ds_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/emc_query_for_processes_initiate",
        "extraParams" : {
          "type" : "emc_query_for_processes_initiate_staless_ds"
        }
      },
      "fields" : [ {
        "name" : "processes",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_activity_list_initiate_staless_ds_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/xcp_activity_list_initiate",
        "extraParams" : {
          "type" : "xcp_activity_list_initiate_staless_ds"
        }
      },
      "fields" : [ {
        "name" : "output_activity_names",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_folderQuery_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/sysobject",
        "extraParams" : {
          "type" : "folderQuery"
        }
      },
      "fields" : [ {
        "name" : "r_lock_owner",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "icon",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "r_lock_date",
        "type" : "string"
      }, {
        "name" : "r_link_cnt",
        "type" : "int"
      }, {
        "name" : "a_content_type",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_versionHistoryQuery_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/sysobject",
        "extraParams" : {
          "type" : "versionHistoryQuery"
        }
      },
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "r_lock_date",
        "type" : "string"
      }, {
        "name" : "r_version_label",
        "type" : "array"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_networklocation_selecti_ds_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/networkLocations",
        "extraParams" : {
          "type" : "xcp_networklocation_selecti_ds"
        }
      },
      "fields" : [ {
        "name" : "location_id",
        "type" : "string"
      }, {
        "name" : "location_name",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_attachment_viewer_ds_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "pplication/xcp_dm_documents",
        "extraParams" : {
          "type" : "xcp_attachment_viewer_ds"
        }
      },
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "a_content_type",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_dm_folder_base_folder_model",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "api" : {
          "read" : "application/xcp_dm_folders/template"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_folders",
        "extraParams" : {
          "type" : "xcp_da_def_create_dm_folder"
        }
      },
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      }, {
        "name" : "folder_id",
        "type" : "string"
      } ]
    }
);

Ext.define("roles",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "rest",
        "url" : "application/roles"
      },
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "name",
        "type" : "string"
      }, {
        "name" : "description",
        "type" : "string"
      }, {
        "name" : "namespace",
        "type" : "string"
      } ]
    }
);

Ext.define("role",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "type" : "json"
        },
        "type" : "rest",
        "url" : "application/role"
      },
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "name",
        "type" : "string"
      }, {
        "name" : "description",
        "type" : "string"
      }, {
        "name" : "namespace",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp.data.model.UserPreferences",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/currentUser/preferences",
        "extraParams" : {
          "fields" : "workflowAutoNextTask,role,delegate_task,delegateToUser,networkLocation"
        }
      },
      "fields" : [ {
        "name" : "workflowAutoNextTask",
        "type" : "string"
      }, {
        "name" : "role",
        "type" : "string"
      }, {
        "name" : "delegate_task",
        "type" : "string"
      }, {
        "name" : "delegateToUser",
        "type" : "string"
      }, {
        "name" : "networkLocation",
        "type" : "string"
      } ]
    }
);
