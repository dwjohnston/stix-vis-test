export const testData = {
    "type": "bundle",
    "id": "bundle--9f0725cb-4bc3-47c3-aba6-99cb97ba4f52",
    "spec_version": "2.0",
    "objects": [
      {
        "type": "marking-definition",
        "id": "marking-definition--dc1b5371-1918-4e57-93f2-25d1d78d983f",
        "created": "2017-07-18T22:00:30.404Z",
        "definition_type": "statement",
        "definition": {
          "statement": "Copyright 2010, Damballa, Inc  All Rights Reserved"
        }
      },
      {
        "type": "report",
        "id": "report--c6c7ebc4-3f65-4375-b22d-313e894ab3d5",
        "created": "2017-07-18T22:00:30.405Z",
        "modified": "2017-07-18T22:00:30.405Z",
        "name": "IMDDOS Botnet",
        "labels": [
          "threat-report"
        ],
        "description": "The newly-uncovered IMDDOS Botnet is a commercial DDOS service hosted in China.",
        "published": "2010-09-13T00:00:00.000Z",
        "object_refs": [
          "malware--efd5ac80-79ba-45cc-9293-01460ad85303",
          "threat-actor--e234c322-0981-4aa4-ae03-f4037e6be83f",
          "indicator--691d06b5-aa1d-46ec-97d6-e59ef9411b8a",
          "indicator--b2ab314f-3a97-44d4-bfca-6a9857a6fe17",
          "indicator--ca26195e-e3c0-4139-8e21-0af90c89bd27",
          "indicator--644bc5dc-1627-4c3a-b9d8-bb2a9fa30567"
        ],
        "object_marking_refs": [
          "marking-definition--dc1b5371-1918-4e57-93f2-25d1d78d983f"
        ],
        "external_references": [
          {
            "source_name": "Damballa, Inc.",
            "url": "https://www.coresecurity.com/system/files/publications/2017/03/Damballa_Report_IMDDOS.pdf",
            "hashes": {
              "SHA-1": "4e0f4197d6d61f52f80a5560d78af599a37277c0"
            }
          }
        ]
      },
      {
        "type": "malware",
        "id": "malware--efd5ac80-79ba-45cc-9293-01460ad85303",
        "created": "2017-07-18T22:00:30.405Z",
        "modified": "2017-07-18T22:00:30.405Z",
        "name": "IMDDOS",
        "labels": [
          "bot",
          "ddos"
        ],
        "description": "Once infected with this malware, a host becomes part of the IMDDOS Botnet",
        "kill_chain_phases": [
          {
            "kill_chain_name": "lockheed-martin-cyber-kill-chain",
            "phase_name": "exploit"
          }
        ]
      },
      {
        "type": "threat-actor",
        "id": "threat-actor--e234c322-0981-4aa4-ae03-f4037e6be83f",
        "created": "2017-07-18T22:00:30.405Z",
        "modified": "2017-07-18T22:00:30.405Z",
        "name": "(Unnamed) IMDDOS Threat Actor",
        "labels": [
          "criminal"
        ]
      },
      {
        "type": "indicator",
        "id": "indicator--691d06b5-aa1d-46ec-97d6-e59ef9411b8a",
        "created": "2017-07-18T22:00:30.406Z",
        "modified": "2017-07-18T22:00:30.406Z",
        "name": "IMDDOS THLD",
        "labels": [
          "malicious-activity"
        ],
        "description": "References to this domain are indicative of the presence of the IMDDOS malware in the environment",
        "valid_from": "2010-04-01T00:00:00.000Z",
        "kill_chain_phases": [
          {
            "kill_chain_name": "lockheed-martin-cyber-kill-chain",
            "phase_name": "exploit"
          }
        ],
        "pattern": "[ domain-name:value = 'imddos.my03.com' ]"
      },
      {
        "type": "indicator",
        "id": "indicator--b2ab314f-3a97-44d4-bfca-6a9857a6fe17",
        "created": "2017-07-18T22:00:30.406Z",
        "modified": "2017-07-18T22:00:30.406Z",
        "name": "IMDDOS THLD Traffic",
        "labels": [
          "malicious-activity"
        ],
        "description": "Traffic to this domain indicates the source host is infected with IMDDOS malware",
        "valid_from": "2010-04-01T00:00:00.000Z",
        "kill_chain_phases": [
          {
            "kill_chain_name": "lockheed-martin-cyber-kill-chain",
            "phase_name": "exploit"
          }
        ],
        "pattern": "[ network-traffic:dst_ref.type = 'domain-name' AND network-traffic:dst_ref.value = 'imddos.my03.com' AND network-traffic:dst_port = 9090 ]"
      },
      {
        "type": "indicator",
        "id": "indicator--ca26195e-e3c0-4139-8e21-0af90c89bd27",
        "created": "2017-07-18T22:00:30.407Z",
        "modified": "2017-07-18T22:00:30.407Z",
        "name": "IMDDOS Infected Host",
        "labels": [
          "malicious-activity"
        ],
        "description": "Presence of this registry key on a host indicates it is infected with the IMDDOS malware",
        "valid_from": "2010-04-01T00:00:00.000Z",
        "kill_chain_phases": [
          {
            "kill_chain_name": "lockheed-martin-cyber-kill-chain",
            "phase_name": "exploit"
          }
        ],
        "pattern": "[windows-registry-key:key LIKE 'HKEY_LOCAL_MACHINE\\\\System\\\\CurrentControlSet\\\\Services\\\\SafePrec%' ]"
      },
      {
        "type": "indicator",
        "id": "indicator--644bc5dc-1627-4c3a-b9d8-bb2a9fa30567",
        "created": "2017-07-18T22:00:30.407Z",
        "modified": "2017-07-18T22:00:30.407Z",
        "name": "IMDDOS C2 Traffic",
        "labels": [
          "malicious-activity"
        ],
        "description": "Traffic to these domains indicates that the source host is under the control of the IMDDOS malware",
        "valid_from": "2010-04-01T00:00:00.000Z",
        "kill_chain_phases": [
          {
            "kill_chain_name": "lockheed-martin-cyber-kill-chain",
            "phase_name": "control"
          }
        ],
        "pattern": "[ network-traffic:dst_ref.type = 'domain-name' AND network-traffic:dst_ref.value IN ('dns.ddos.im', 'win2003ddos.3322.org', 'woshindi.3322.org', 'pk518.3322.org', 'huanjue6369029.3322.org', 'qq603535.3322.org', 'qq188588.3322.org', 'hjff.3322.org', '198600.3322.org', 'ankankan.3322.org', 'yinn.3322.org') ]"
      },
      {
        "type": "relationship",
        "id": "relationship--ff918b21-2d4e-4e78-8ed8-417302195f0b",
        "created": "2017-07-18T22:00:30.408Z",
        "modified": "2017-07-18T22:00:30.408Z",
        "relationship_type": "indicates",
        "source_ref": "indicator--691d06b5-aa1d-46ec-97d6-e59ef9411b8a",
        "target_ref": "malware--efd5ac80-79ba-45cc-9293-01460ad85303"
      },
      {
        "type": "relationship",
        "id": "relationship--0276f9d9-7679-4128-aa5a-dda8cd6518b4",
        "created": "2017-07-18T22:00:30.408Z",
        "modified": "2017-07-18T22:00:30.408Z",
        "relationship_type": "indicates",
        "source_ref": "indicator--b2ab314f-3a97-44d4-bfca-6a9857a6fe17",
        "target_ref": "malware--efd5ac80-79ba-45cc-9293-01460ad85303"
      },
      {
        "type": "relationship",
        "id": "relationship--8984fb15-5bff-4ba2-bf2e-c5099a2afea0",
        "created": "2017-07-18T22:00:30.408Z",
        "modified": "2017-07-18T22:00:30.408Z",
        "relationship_type": "indicates",
        "source_ref": "indicator--ca26195e-e3c0-4139-8e21-0af90c89bd27",
        "target_ref": "malware--efd5ac80-79ba-45cc-9293-01460ad85303"
      },
      {
        "type": "relationship",
        "id": "relationship--5b15d307-6751-4e95-a60f-f31cd0d250e1",
        "created": "2017-07-18T22:00:30.408Z",
        "modified": "2017-07-18T22:00:30.408Z",
        "relationship_type": "indicates",
        "source_ref": "indicator--644bc5dc-1627-4c3a-b9d8-bb2a9fa30567",
        "target_ref": "malware--efd5ac80-79ba-45cc-9293-01460ad85303"
      },
      {
        "type": "relationship",
        "id": "relationship--1cef2734-91d2-4acb-9e4e-cda56ead4770",
        "created": "2017-07-18T22:00:30.408Z",
        "modified": "2017-07-18T22:00:30.408Z",
        "relationship_type": "located-at",
        "source_ref": "threat-actor--e234c322-0981-4aa4-ae03-f4037e6be83f",
        "target_ref": "location--07608992-927e-434c-9cbd-bf45274290a0"
      },
      {
        "type": "relationship",
        "id": "relationship--80f31be7-1377-4143-86e9-3f9037d072ad",
        "created": "2017-07-18T22:00:30.408Z",
        "modified": "2017-07-18T22:00:30.408Z",
        "relationship_type": "uses",
        "source_ref": "threat-actor--e234c322-0981-4aa4-ae03-f4037e6be83f",
        "target_ref": "malware--efd5ac80-79ba-45cc-9293-01460ad85303"
      }
    ]
  }
  