export default [
  {
    title: "Custom",
    schema: {
      properties: {
        keyValuePair: {
          additionalProperties: {
            type: "string",
          },
          type: "object",
        },
        positions: {
          type: "array",
          items: {
            type: "string",
          },
        },
        name: {
          type: "string",
        },
        age: {
          type: "number",
        },
        previousJobs: {
          type: "array",
          items: {
            type: "object",
            properties: {
              companyName: {
                type: "string",
              },
              position: {
                type: "string",
              },
              yearWorked: {
                type: "number",
              },
            },
            required: ["companyName", "position", "yearWorked"],
          },
        },
        demoObject: {
          type: "object",
          properties: {
            demoProperty1: {
              type: "string",
            },
            demoProperty2: {
              type: "string",
            },
            demoProperty3: {
              type: "integer",
            },
          },
          required: ["demoProperty1", "demoProperty2"],
        },
      },
      required: ["name", "age", "previousJobs"],
      type: "object",
    },
    model: {
      keyValuePair: { "demo-key": "demo-value" },
      positions: ["Software Engineer", "Designer"],
      name: "John Doe",
      age: 23,
      previousJobs: [
        {
          companyName: "appscode",
          position: "Solftware Engineer",
          yearWorked: 32,
        },
      ],
      demoObject: {
        demoProperty3: 3,
      },
    },
  },
  {
    title: "Stash",
    schema: {
      properties: {
        additionalPodSecurityPolicies: {
          items: {
            type: "string",
          },
          type: "array",
        },
        affinity: {
          description: "If specified, the pod's scheduling constraints",
          properties: {
            nodeAffinity: {
              description:
                "Describes node affinity scheduling rules for the\npod.",
              properties: {
                preferredDuringSchedulingIgnoredDuringExecution: {
                  description:
                    'The scheduler will prefer to schedule pods\nto nodes that satisfy the affinity expressions specified\nby this field, but it may choose a node that violates\none or more of the expressions. The node that is most\npreferred is the one with the greatest sum of weights,\ni.e. for each node that meets all of the scheduling requirements\n(resource request, requiredDuringScheduling affinity expressions,\netc.), compute a sum by iterating through the elements\nof this field and adding "weight" to the sum if the node\nmatches the corresponding matchExpressions; the node(s)\nwith the highest sum are the most preferred.',
                  items: {
                    description:
                      "An empty preferred scheduling term matches\nall objects with implicit weight 0 (i.e. it's a no-op).\nA null preferred scheduling term matches no objects\n(i.e. is also a no-op).",
                    properties: {
                      preference: {
                        description:
                          "A node selector term, associated with\nthe corresponding weight.",
                        properties: {
                          matchExpressions: {
                            description:
                              "A list of node selector requirements\nby node's labels.",
                            items: {
                              description:
                                "A node selector requirement is\na selector that contains values, a key, and\nan operator that relates the key and values.",
                              properties: {
                                key: {
                                  description:
                                    "The label key that the selector\napplies to.",
                                  type: "string",
                                },
                                operator: {
                                  description:
                                    "Represents a key's relationship\nto a set of values. Valid operators are\nIn, NotIn, Exists, DoesNotExist. Gt, and\nLt.",
                                  type: "string",
                                },
                                values: {
                                  description:
                                    "An array of string values.\nIf the operator is In or NotIn, the values\narray must be non-empty. If the operator\nis Exists or DoesNotExist, the values\narray must be empty. If the operator is\nGt or Lt, the values array must have a\nsingle element, which will be interpreted\nas an integer. This array is replaced\nduring a strategic merge patch.",
                                  items: {
                                    type: "string",
                                  },
                                  type: "array",
                                },
                              },
                              required: ["key", "operator"],
                              type: "object",
                            },
                            type: "array",
                          },
                          matchFields: {
                            description:
                              "A list of node selector requirements\nby node's fields.",
                            items: {
                              description:
                                "A node selector requirement is\na selector that contains values, a key, and\nan operator that relates the key and values.",
                              properties: {
                                key: {
                                  description:
                                    "The label key that the selector\napplies to.",
                                  type: "string",
                                },
                                operator: {
                                  description:
                                    "Represents a key's relationship\nto a set of values. Valid operators are\nIn, NotIn, Exists, DoesNotExist. Gt, and\nLt.",
                                  type: "string",
                                },
                                values: {
                                  description:
                                    "An array of string values.\nIf the operator is In or NotIn, the values\narray must be non-empty. If the operator\nis Exists or DoesNotExist, the values\narray must be empty. If the operator is\nGt or Lt, the values array must have a\nsingle element, which will be interpreted\nas an integer. This array is replaced\nduring a strategic merge patch.",
                                  items: {
                                    type: "string",
                                  },
                                  type: "array",
                                },
                              },
                              required: ["key", "operator"],
                              type: "object",
                            },
                            type: "array",
                          },
                        },
                        type: "object",
                      },
                      weight: {
                        description:
                          "Weight associated with matching the corresponding\nnodeSelectorTerm, in the range 1-100.",
                        format: "int32",
                        type: "integer",
                      },
                    },
                    required: ["preference", "weight"],
                    type: "object",
                  },
                  type: "array",
                },
                requiredDuringSchedulingIgnoredDuringExecution: {
                  description:
                    "If the affinity requirements specified by this\nfield are not met at scheduling time, the pod will not\nbe scheduled onto the node. If the affinity requirements\nspecified by this field cease to be met at some point\nduring pod execution (e.g. due to an update), the system\nmay or may not try to eventually evict the pod from its\nnode.",
                  properties: {
                    nodeSelectorTerms: {
                      description:
                        "Required. A list of node selector terms.\nThe terms are ORed.",
                      items: {
                        description:
                          "A null or empty node selector term matches\nno objects. The requirements of them are ANDed.\nThe TopologySelectorTerm type implements a subset\nof the NodeSelectorTerm.",
                        properties: {
                          matchExpressions: {
                            description:
                              "A list of node selector requirements\nby node's labels.",
                            items: {
                              description:
                                "A node selector requirement is\na selector that contains values, a key, and\nan operator that relates the key and values.",
                              properties: {
                                key: {
                                  description:
                                    "The label key that the selector\napplies to.",
                                  type: "string",
                                },
                                operator: {
                                  description:
                                    "Represents a key's relationship\nto a set of values. Valid operators are\nIn, NotIn, Exists, DoesNotExist. Gt, and\nLt.",
                                  type: "string",
                                },
                                values: {
                                  description:
                                    "An array of string values.\nIf the operator is In or NotIn, the values\narray must be non-empty. If the operator\nis Exists or DoesNotExist, the values\narray must be empty. If the operator is\nGt or Lt, the values array must have a\nsingle element, which will be interpreted\nas an integer. This array is replaced\nduring a strategic merge patch.",
                                  items: {
                                    type: "string",
                                  },
                                  type: "array",
                                },
                              },
                              required: ["key", "operator"],
                              type: "object",
                            },
                            type: "array",
                          },
                          matchFields: {
                            description:
                              "A list of node selector requirements\nby node's fields.",
                            items: {
                              description:
                                "A node selector requirement is\na selector that contains values, a key, and\nan operator that relates the key and values.",
                              properties: {
                                key: {
                                  description:
                                    "The label key that the selector\napplies to.",
                                  type: "string",
                                },
                                operator: {
                                  description:
                                    "Represents a key's relationship\nto a set of values. Valid operators are\nIn, NotIn, Exists, DoesNotExist. Gt, and\nLt.",
                                  type: "string",
                                },
                                values: {
                                  description:
                                    "An array of string values.\nIf the operator is In or NotIn, the values\narray must be non-empty. If the operator\nis Exists or DoesNotExist, the values\narray must be empty. If the operator is\nGt or Lt, the values array must have a\nsingle element, which will be interpreted\nas an integer. This array is replaced\nduring a strategic merge patch.",
                                  items: {
                                    type: "string",
                                  },
                                  type: "array",
                                },
                              },
                              required: ["key", "operator"],
                              type: "object",
                            },
                            type: "array",
                          },
                        },
                        type: "object",
                      },
                      type: "array",
                    },
                  },
                  required: ["nodeSelectorTerms"],
                  type: "object",
                },
              },
              type: "object",
            },
            podAffinity: {
              description:
                "Describes pod affinity scheduling rules (e.g. co-locate\nthis pod in the same node, zone, etc. as some other pod(s)).",
              properties: {
                preferredDuringSchedulingIgnoredDuringExecution: {
                  description:
                    'The scheduler will prefer to schedule pods\nto nodes that satisfy the affinity expressions specified\nby this field, but it may choose a node that violates\none or more of the expressions. The node that is most\npreferred is the one with the greatest sum of weights,\ni.e. for each node that meets all of the scheduling requirements\n(resource request, requiredDuringScheduling affinity expressions,\netc.), compute a sum by iterating through the elements\nof this field and adding "weight" to the sum if the node\nhas pods which matches the corresponding podAffinityTerm;\nthe node(s) with the highest sum are the most preferred.',
                  items: {
                    description:
                      "The weights of all of the matched WeightedPodAffinityTerm\nfields are added per-node to find the most preferred\nnode(s)",
                    properties: {
                      podAffinityTerm: {
                        description:
                          "Required. A pod affinity term, associated\nwith the corresponding weight.",
                        properties: {
                          labelSelector: {
                            description:
                              "A label query over a set of resources,\nin this case pods.",
                            properties: {
                              matchExpressions: {
                                description:
                                  "matchExpressions is a list of\nlabel selector requirements. The requirements\nare ANDed.",
                                items: {
                                  description:
                                    "A label selector requirement\nis a selector that contains values, a\nkey, and an operator that relates the\nkey and values.",
                                  properties: {
                                    key: {
                                      description:
                                        "key is the label key that\nthe selector applies to.",
                                      type: "string",
                                    },
                                    operator: {
                                      description:
                                        "operator represents a key's\nrelationship to a set of values. Valid\noperators are In, NotIn, Exists and\nDoesNotExist.",
                                      type: "string",
                                    },
                                    values: {
                                      description:
                                        "values is an array of string\nvalues. If the operator is In or NotIn,\nthe values array must be non-empty.\nIf the operator is Exists or DoesNotExist,\nthe values array must be empty. This\narray is replaced during a strategic\nmerge patch.",
                                      items: {
                                        type: "string",
                                      },
                                      type: "array",
                                    },
                                  },
                                  required: ["key", "operator"],
                                  type: "object",
                                },
                                type: "array",
                              },
                              matchLabels: {
                                additionalProperties: {
                                  type: "string",
                                },
                                description:
                                  'matchLabels is a map of {key,value}\npairs. A single {key,value} in the matchLabels\nmap is equivalent to an element of matchExpressions,\nwhose key field is "key", the operator is\n"In", and the values array contains only\n"value". The requirements are ANDed.',
                                type: "object",
                              },
                            },
                            type: "object",
                          },
                          namespaces: {
                            description:
                              'namespaces specifies which namespaces\nthe labelSelector applies to (matches against);\nnull or empty list means "this pod\'s namespace"',
                            items: {
                              type: "string",
                            },
                            type: "array",
                          },
                          topologyKey: {
                            description:
                              "This pod should be co-located (affinity)\nor not co-located (anti-affinity) with the pods\nmatching the labelSelector in the specified\nnamespaces, where co-located is defined as running\non a node whose value of the label with key\ntopologyKey matches that of any node on which\nany of the selected pods is running. Empty topologyKey\nis not allowed.",
                            type: "string",
                          },
                        },
                        required: ["topologyKey"],
                        type: "object",
                      },
                      weight: {
                        description:
                          "weight associated with matching the corresponding\npodAffinityTerm, in the range 1-100.",
                        format: "int32",
                        type: "integer",
                      },
                    },
                    required: ["podAffinityTerm", "weight"],
                    type: "object",
                  },
                  type: "array",
                },
                requiredDuringSchedulingIgnoredDuringExecution: {
                  description:
                    "If the affinity requirements specified by this\nfield are not met at scheduling time, the pod will not\nbe scheduled onto the node. If the affinity requirements\nspecified by this field cease to be met at some point\nduring pod execution (e.g. due to a pod label update),\nthe system may or may not try to eventually evict the\npod from its node. When there are multiple elements, the\nlists of nodes corresponding to each podAffinityTerm are\nintersected, i.e. all terms must be satisfied.",
                  items: {
                    description:
                      "Defines a set of pods (namely those matching\nthe labelSelector relative to the given namespace(s))\nthat this pod should be co-located (affinity) or not\nco-located (anti-affinity) with, where co-located is\ndefined as running on a node whose value of the label\nwith key <topologyKey> matches that of any node on which\na pod of the set of pods is running",
                    properties: {
                      labelSelector: {
                        description:
                          "A label query over a set of resources,\nin this case pods.",
                        properties: {
                          matchExpressions: {
                            description:
                              "matchExpressions is a list of label\nselector requirements. The requirements are\nANDed.",
                            items: {
                              description:
                                "A label selector requirement is\na selector that contains values, a key, and\nan operator that relates the key and values.",
                              properties: {
                                key: {
                                  description:
                                    "key is the label key that the\nselector applies to.",
                                  type: "string",
                                },
                                operator: {
                                  description:
                                    "operator represents a key's\nrelationship to a set of values. Valid\noperators are In, NotIn, Exists and DoesNotExist.",
                                  type: "string",
                                },
                                values: {
                                  description:
                                    "values is an array of string\nvalues. If the operator is In or NotIn,\nthe values array must be non-empty. If\nthe operator is Exists or DoesNotExist,\nthe values array must be empty. This array\nis replaced during a strategic merge patch.",
                                  items: {
                                    type: "string",
                                  },
                                  type: "array",
                                },
                              },
                              required: ["key", "operator"],
                              type: "object",
                            },
                            type: "array",
                          },
                          matchLabels: {
                            additionalProperties: {
                              type: "string",
                            },
                            description:
                              'matchLabels is a map of {key,value}\npairs. A single {key,value} in the matchLabels\nmap is equivalent to an element of matchExpressions,\nwhose key field is "key", the operator is "In",\nand the values array contains only "value".\nThe requirements are ANDed.',
                            type: "object",
                          },
                        },
                        type: "object",
                      },
                      namespaces: {
                        description:
                          'namespaces specifies which namespaces\nthe labelSelector applies to (matches against);\nnull or empty list means "this pod\'s namespace"',
                        items: {
                          type: "string",
                        },
                        type: "array",
                      },
                      topologyKey: {
                        description:
                          "This pod should be co-located (affinity)\nor not co-located (anti-affinity) with the pods\nmatching the labelSelector in the specified namespaces,\nwhere co-located is defined as running on a node\nwhose value of the label with key topologyKey matches\nthat of any node on which any of the selected pods\nis running. Empty topologyKey is not allowed.",
                        type: "string",
                      },
                    },
                    required: ["topologyKey"],
                    type: "object",
                  },
                  type: "array",
                },
              },
              type: "object",
            },
            podAntiAffinity: {
              description:
                "Describes pod anti-affinity scheduling rules (e.g.\navoid putting this pod in the same node, zone, etc. as some\nother pod(s)).",
              properties: {
                preferredDuringSchedulingIgnoredDuringExecution: {
                  description:
                    'The scheduler will prefer to schedule pods\nto nodes that satisfy the anti-affinity expressions specified\nby this field, but it may choose a node that violates\none or more of the expressions. The node that is most\npreferred is the one with the greatest sum of weights,\ni.e. for each node that meets all of the scheduling requirements\n(resource request, requiredDuringScheduling anti-affinity\nexpressions, etc.), compute a sum by iterating through\nthe elements of this field and adding "weight" to the\nsum if the node has pods which matches the corresponding\npodAffinityTerm; the node(s) with the highest sum are\nthe most preferred.',
                  items: {
                    description:
                      "The weights of all of the matched WeightedPodAffinityTerm\nfields are added per-node to find the most preferred\nnode(s)",
                    properties: {
                      podAffinityTerm: {
                        description:
                          "Required. A pod affinity term, associated\nwith the corresponding weight.",
                        properties: {
                          labelSelector: {
                            description:
                              "A label query over a set of resources,\nin this case pods.",
                            properties: {
                              matchExpressions: {
                                description:
                                  "matchExpressions is a list of\nlabel selector requirements. The requirements\nare ANDed.",
                                items: {
                                  description:
                                    "A label selector requirement\nis a selector that contains values, a\nkey, and an operator that relates the\nkey and values.",
                                  properties: {
                                    key: {
                                      description:
                                        "key is the label key that\nthe selector applies to.",
                                      type: "string",
                                    },
                                    operator: {
                                      description:
                                        "operator represents a key's\nrelationship to a set of values. Valid\noperators are In, NotIn, Exists and\nDoesNotExist.",
                                      type: "string",
                                    },
                                    values: {
                                      description:
                                        "values is an array of string\nvalues. If the operator is In or NotIn,\nthe values array must be non-empty.\nIf the operator is Exists or DoesNotExist,\nthe values array must be empty. This\narray is replaced during a strategic\nmerge patch.",
                                      items: {
                                        type: "string",
                                      },
                                      type: "array",
                                    },
                                  },
                                  required: ["key", "operator"],
                                  type: "object",
                                },
                                type: "array",
                              },
                              matchLabels: {
                                additionalProperties: {
                                  type: "string",
                                },
                                description:
                                  'matchLabels is a map of {key,value}\npairs. A single {key,value} in the matchLabels\nmap is equivalent to an element of matchExpressions,\nwhose key field is "key", the operator is\n"In", and the values array contains only\n"value". The requirements are ANDed.',
                                type: "object",
                              },
                            },
                            type: "object",
                          },
                          namespaces: {
                            description:
                              'namespaces specifies which namespaces\nthe labelSelector applies to (matches against);\nnull or empty list means "this pod\'s namespace"',
                            items: {
                              type: "string",
                            },
                            type: "array",
                          },
                          topologyKey: {
                            description:
                              "This pod should be co-located (affinity)\nor not co-located (anti-affinity) with the pods\nmatching the labelSelector in the specified\nnamespaces, where co-located is defined as running\non a node whose value of the label with key\ntopologyKey matches that of any node on which\nany of the selected pods is running. Empty topologyKey\nis not allowed.",
                            type: "string",
                          },
                        },
                        required: ["topologyKey"],
                        type: "object",
                      },
                      weight: {
                        description:
                          "weight associated with matching the corresponding\npodAffinityTerm, in the range 1-100.",
                        format: "int32",
                        type: "integer",
                      },
                    },
                    required: ["podAffinityTerm", "weight"],
                    type: "object",
                  },
                  type: "array",
                },
                requiredDuringSchedulingIgnoredDuringExecution: {
                  description:
                    "If the anti-affinity requirements specified\nby this field are not met at scheduling time, the pod\nwill not be scheduled onto the node. If the anti-affinity\nrequirements specified by this field cease to be met at\nsome point during pod execution (e.g. due to a pod label\nupdate), the system may or may not try to eventually evict\nthe pod from its node. When there are multiple elements,\nthe lists of nodes corresponding to each podAffinityTerm\nare intersected, i.e. all terms must be satisfied.",
                  items: {
                    description:
                      "Defines a set of pods (namely those matching\nthe labelSelector relative to the given namespace(s))\nthat this pod should be co-located (affinity) or not\nco-located (anti-affinity) with, where co-located is\ndefined as running on a node whose value of the label\nwith key <topologyKey> matches that of any node on which\na pod of the set of pods is running",
                    properties: {
                      labelSelector: {
                        description:
                          "A label query over a set of resources,\nin this case pods.",
                        properties: {
                          matchExpressions: {
                            description:
                              "matchExpressions is a list of label\nselector requirements. The requirements are\nANDed.",
                            items: {
                              description:
                                "A label selector requirement is\na selector that contains values, a key, and\nan operator that relates the key and values.",
                              properties: {
                                key: {
                                  description:
                                    "key is the label key that the\nselector applies to.",
                                  type: "string",
                                },
                                operator: {
                                  description:
                                    "operator represents a key's\nrelationship to a set of values. Valid\noperators are In, NotIn, Exists and DoesNotExist.",
                                  type: "string",
                                },
                                values: {
                                  description:
                                    "values is an array of string\nvalues. If the operator is In or NotIn,\nthe values array must be non-empty. If\nthe operator is Exists or DoesNotExist,\nthe values array must be empty. This array\nis replaced during a strategic merge patch.",
                                  items: {
                                    type: "string",
                                  },
                                  type: "array",
                                },
                              },
                              required: ["key", "operator"],
                              type: "object",
                            },
                            type: "array",
                          },
                          matchLabels: {
                            additionalProperties: {
                              type: "string",
                            },
                            description:
                              'matchLabels is a map of {key,value}\npairs. A single {key,value} in the matchLabels\nmap is equivalent to an element of matchExpressions,\nwhose key field is "key", the operator is "In",\nand the values array contains only "value".\nThe requirements are ANDed.',
                            type: "object",
                          },
                        },
                        type: "object",
                      },
                      namespaces: {
                        description:
                          'namespaces specifies which namespaces\nthe labelSelector applies to (matches against);\nnull or empty list means "this pod\'s namespace"',
                        items: {
                          type: "string",
                        },
                        type: "array",
                      },
                      topologyKey: {
                        description:
                          "This pod should be co-located (affinity)\nor not co-located (anti-affinity) with the pods\nmatching the labelSelector in the specified namespaces,\nwhere co-located is defined as running on a node\nwhose value of the label with key topologyKey matches\nthat of any node on which any of the selected pods\nis running. Empty topologyKey is not allowed.",
                        type: "string",
                      },
                    },
                    required: ["topologyKey"],
                    type: "object",
                  },
                  type: "array",
                },
              },
              type: "object",
            },
          },
          type: "object",
        },
        annotations: {
          additionalProperties: {
            type: "string",
          },
          type: "object",
        },
        apiserver: {
          properties: {
            bypassValidatingWebhookXray: {
              type: "boolean",
            },
            ca: {
              type: "string",
            },
            enableMutatingWebhook: {
              type: "boolean",
            },
            enableValidatingWebhook: {
              type: "boolean",
            },
            groupPriorityMinimum: {
              type: "integer",
            },
            healthcheck: {
              properties: {
                enabled: {
                  type: "boolean",
                },
              },
              required: ["enabled"],
              type: "object",
            },
            useKubeapiserverFqdnForAks: {
              type: "boolean",
            },
            versionPriority: {
              type: "integer",
            },
          },
          required: [
            "bypassValidatingWebhookXray",
            "ca",
            "enableMutatingWebhook",
            "enableValidatingWebhook",
            "groupPriorityMinimum",
            "healthcheck",
            "useKubeapiserverFqdnForAks",
            "versionPriority",
          ],
          type: "object",
        },
        cleaner: {
          properties: {
            registry: {
              type: "string",
            },
            repository: {
              type: "string",
            },
            tag: {
              type: "string",
            },
          },
          required: ["registry", "repository", "tag"],
          type: "object",
        },
        criticalAddon: {
          type: "boolean",
        },
        enableAnalytics: {
          type: "boolean",
        },
        imagePullPolicy: {
          type: "string",
        },
        logLevel: {
          type: "integer",
        },
        monitoring: {
          properties: {
            agent: {
              type: "string",
            },
            backup: {
              type: "boolean",
            },
            operator: {
              type: "boolean",
            },
            prometheus: {
              properties: {
                namespace: {
                  type: "string",
                },
              },
              required: ["namespace"],
              type: "object",
            },
            serviceMonitor: {
              properties: {
                labels: {
                  additionalProperties: {
                    type: "string",
                  },
                  type: "object",
                },
              },
              required: ["labels"],
              type: "object",
            },
          },
          required: [
            "agent",
            "backup",
            "operator",
            "prometheus",
            "serviceMonitor",
          ],
          type: "object",
        },
        nodeSelector: {
          additionalProperties: {
            type: "string",
          },
          type: "object",
        },
        operator: {
          properties: {
            registry: {
              type: "string",
            },
            repository: {
              type: "string",
            },
            tag: {
              type: "string",
            },
          },
          required: ["registry", "repository", "tag"],
          type: "object",
        },
        platform: {
          properties: {
            openshift: {
              type: "boolean",
            },
          },
          required: ["openshift"],
          type: "object",
        },
        pushgateway: {
          properties: {
            registry: {
              type: "string",
            },
            repository: {
              type: "string",
            },
            tag: {
              type: "string",
            },
          },
          required: ["registry", "repository", "tag"],
          type: "object",
        },
        replicaCount: {
          type: "integer",
        },
        serviceAccount: {
          properties: {
            create: {
              type: "boolean",
            },
            name: {
              type: "string",
            },
          },
          required: ["create", "name"],
          type: "object",
        },
        tolerations: {
          description: "If specified, the pod's tolerations.",
          items: {
            description:
              "The pod this Toleration is attached to tolerates\nany taint that matches the triple <key,value,effect> using the\nmatching operator <operator>.",
            properties: {
              effect: {
                description:
                  "Effect indicates the taint effect to match. Empty\nmeans match all taint effects. When specified, allowed values\nare NoSchedule, PreferNoSchedule and NoExecute.",
                type: "string",
              },
              key: {
                description:
                  "Key is the taint key that the toleration applies\nto. Empty means match all taint keys. If the key is empty,\noperator must be Exists; this combination means to match\nall values and all keys.",
                type: "string",
              },
              operator: {
                description:
                  "Operator represents a key's relationship to the\nvalue. Valid operators are Exists and Equal. Defaults to\nEqual. Exists is equivalent to wildcard for value, so that\na pod can tolerate all taints of a particular category.",
                type: "string",
              },
              tolerationSeconds: {
                description:
                  "TolerationSeconds represents the period of time\nthe toleration (which must be of effect NoExecute, otherwise\nthis field is ignored) tolerates the taint. By default,\nit is not set, which means tolerate the taint forever (do\nnot evict). Zero and negative values will be treated as\n0 (evict immediately) by the system.",
                format: "int64",
                type: "integer",
              },
              value: {
                description:
                  "Value is the taint value the toleration matches\nto. If the operator is Exists, the value should be empty,\notherwise just a regular string.",
                type: "string",
              },
            },
            type: "object",
          },
          type: "array",
        },
      },
      required: [
        "additionalPodSecurityPolicies",
        "annotations",
        "apiserver",
        "cleaner",
        "criticalAddon",
        "enableAnalytics",
        "imagePullPolicy",
        "logLevel",
        "monitoring",
        "nodeSelector",
        "operator",
        "platform",
        "pushgateway",
        "replicaCount",
        "serviceAccount",
      ],
      type: "object",
    },
    model: {
      affinity: {},
      annotations: {},
      apiserver: {
        bypassValidatingWebhookXray: false,
        ca: "not-ca-cert",
        disableStatusSubresource: false,
        enableMutatingWebhook: true,
        enableValidatingWebhook: true,
        groupPriorityMinimum: 10000,
        healthcheck: {
          enabled: true,
        },
        useKubeapiserverFqdnForAks: true,
        versionPriority: 15,
      },
      cleaner: {
        registry: "appscode",
        repository: "kubectl",
        tag: "v1.12",
      },
      criticalAddon: false,
      enableAnalytics: true,
      imagePullPolicy: "IfNotPresent",
      logLevel: 3,
      monitoring: {
        agent: "none",
        backup: false,
        operator: false,
        prometheus: {
          namespace: "",
        },
        serviceMonitor: {
          labels: {},
        },
      },
      nodeSelector: {
        "beta.kubernetes.io/arch": "amd64",
        "beta.kubernetes.io/os": "linux",
      },
      operator: {
        registry: "appscode",
        repository: "stash",
        tag: "0.8.3",
      },
      pushgateway: {
        registry: "prom",
        repository: "pushgateway",
        tag: "v0.5.2",
      },
      rbac: {
        create: true,
      },
      replicaCount: 1,
      serviceAccount: {
        create: true,
        name: null,
      },
      tolerations: [],
    },
  },
  {
    title: "MongoDB",
    schema: {
      properties: {
        affinity: {
          description: "Affinity is a group of affinity scheduling rules.",
          properties: {
            nodeAffinity: {
              description:
                "Describes node affinity scheduling rules for the pod.",
              properties: {
                preferredDuringSchedulingIgnoredDuringExecution: {
                  description:
                    'The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node matches the corresponding matchExpressions; the node(s) with the highest sum are the most preferred.',
                  items: {
                    description:
                      "An empty preferred scheduling term matches all objects with implicit weight 0 (i.e. it's a no-op). A null preferred scheduling term matches no objects (i.e. is also a no-op).",
                    properties: {
                      preference: {
                        description:
                          "A node selector term, associated with the corresponding weight.",
                        properties: {
                          matchExpressions: {
                            description:
                              "A list of node selector requirements by node's labels.",
                            items: {
                              description:
                                "A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values.",
                              properties: {
                                key: {
                                  description:
                                    "The label key that the selector applies to.",
                                  type: "string",
                                },
                                operator: {
                                  description:
                                    "Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.",
                                  type: "string",
                                },
                                values: {
                                  description:
                                    "An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.",
                                  items: {
                                    type: "string",
                                  },
                                  type: "array",
                                },
                              },
                              required: ["key", "operator"],
                              type: "object",
                            },
                            type: "array",
                          },
                          matchFields: {
                            description:
                              "A list of node selector requirements by node's fields.",
                            items: {
                              description:
                                "A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values.",
                              properties: {
                                key: {
                                  description:
                                    "The label key that the selector applies to.",
                                  type: "string",
                                },
                                operator: {
                                  description:
                                    "Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.",
                                  type: "string",
                                },
                                values: {
                                  description:
                                    "An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.",
                                  items: {
                                    type: "string",
                                  },
                                  type: "array",
                                },
                              },
                              required: ["key", "operator"],
                              type: "object",
                            },
                            type: "array",
                          },
                        },
                        type: "object",
                      },
                      weight: {
                        description:
                          "Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.",
                        format: "int32",
                        type: "integer",
                      },
                    },
                    required: ["preference", "weight"],
                    type: "object",
                  },
                  type: "array",
                },
                requiredDuringSchedulingIgnoredDuringExecution: {
                  description:
                    "If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to an update), the system may or may not try to eventually evict the pod from its node.",
                  properties: {
                    nodeSelectorTerms: {
                      description:
                        "Required. A list of node selector terms. The terms are ORed.",
                      items: {
                        description:
                          "A null or empty node selector term matches no objects. The requirements of them are ANDed. The TopologySelectorTerm type implements a subset of the NodeSelectorTerm.",
                        properties: {
                          matchExpressions: {
                            description:
                              "A list of node selector requirements by node's labels.",
                            items: {
                              description:
                                "A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values.",
                              properties: {
                                key: {
                                  description:
                                    "The label key that the selector applies to.",
                                  type: "string",
                                },
                                operator: {
                                  description:
                                    "Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.",
                                  type: "string",
                                },
                                values: {
                                  description:
                                    "An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.",
                                  items: {
                                    type: "string",
                                  },
                                  type: "array",
                                },
                              },
                              required: ["key", "operator"],
                              type: "object",
                            },
                            type: "array",
                          },
                          matchFields: {
                            description:
                              "A list of node selector requirements by node's fields.",
                            items: {
                              description:
                                "A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values.",
                              properties: {
                                key: {
                                  description:
                                    "The label key that the selector applies to.",
                                  type: "string",
                                },
                                operator: {
                                  description:
                                    "Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.",
                                  type: "string",
                                },
                                values: {
                                  description:
                                    "An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.",
                                  items: {
                                    type: "string",
                                  },
                                  type: "array",
                                },
                              },
                              required: ["key", "operator"],
                              type: "object",
                            },
                            type: "array",
                          },
                        },
                        type: "object",
                      },
                      type: "array",
                    },
                  },
                  required: ["nodeSelectorTerms"],
                  type: "object",
                },
              },
              type: "object",
            },
            podAffinity: {
              description:
                "Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)).",
              properties: {
                preferredDuringSchedulingIgnoredDuringExecution: {
                  description:
                    'The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.',
                  items: {
                    description:
                      "The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s)",
                    properties: {
                      podAffinityTerm: {
                        description:
                          "Required. A pod affinity term, associated with the corresponding weight.",
                        properties: {
                          labelSelector: {
                            description:
                              "A label query over a set of resources, in this case pods.",
                            properties: {
                              matchExpressions: {
                                description:
                                  "matchExpressions is a list of label selector requirements. The requirements are ANDed.",
                                items: {
                                  description:
                                    "A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.",
                                  properties: {
                                    key: {
                                      description:
                                        "key is the label key that the selector applies to.",
                                      type: "string",
                                    },
                                    operator: {
                                      description:
                                        "operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.",
                                      type: "string",
                                    },
                                    values: {
                                      description:
                                        "values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.",
                                      items: {
                                        type: "string",
                                      },
                                      type: "array",
                                    },
                                  },
                                  required: ["key", "operator"],
                                  type: "object",
                                },
                                type: "array",
                              },
                              matchLabels: {
                                additionalProperties: {
                                  type: "string",
                                },
                                description:
                                  'matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.',
                                type: "object",
                              },
                            },
                            type: "object",
                          },
                          namespaces: {
                            description:
                              'namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means "this pod\'s namespace"',
                            items: {
                              type: "string",
                            },
                            type: "array",
                          },
                          topologyKey: {
                            description:
                              "This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.",
                            type: "string",
                          },
                        },
                        required: ["topologyKey"],
                        type: "object",
                      },
                      weight: {
                        description:
                          "weight associated with matching the corresponding podAffinityTerm, in the range 1-100.",
                        format: "int32",
                        type: "integer",
                      },
                    },
                    required: ["podAffinityTerm", "weight"],
                    type: "object",
                  },
                  type: "array",
                },
                requiredDuringSchedulingIgnoredDuringExecution: {
                  description:
                    "If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.",
                  items: {
                    description:
                      "Defines a set of pods (namely those matching the labelSelector relative to the given namespace(s)) that this pod should be co-located (affinity) or not co-located (anti-affinity) with, where co-located is defined as running on a node whose value of the label with key <topologyKey> matches that of any node on which a pod of the set of pods is running",
                    properties: {
                      labelSelector: {
                        description:
                          "A label query over a set of resources, in this case pods.",
                        properties: {
                          matchExpressions: {
                            description:
                              "matchExpressions is a list of label selector requirements. The requirements are ANDed.",
                            items: {
                              description:
                                "A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.",
                              properties: {
                                key: {
                                  description:
                                    "key is the label key that the selector applies to.",
                                  type: "string",
                                },
                                operator: {
                                  description:
                                    "operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.",
                                  type: "string",
                                },
                                values: {
                                  description:
                                    "values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.",
                                  items: {
                                    type: "string",
                                  },
                                  type: "array",
                                },
                              },
                              required: ["key", "operator"],
                              type: "object",
                            },
                            type: "array",
                          },
                          matchLabels: {
                            additionalProperties: {
                              type: "string",
                            },
                            description:
                              'matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.',
                            type: "object",
                          },
                        },
                        type: "object",
                      },
                      namespaces: {
                        description:
                          'namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means "this pod\'s namespace"',
                        items: {
                          type: "string",
                        },
                        type: "array",
                      },
                      topologyKey: {
                        description:
                          "This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.",
                        type: "string",
                      },
                    },
                    required: ["topologyKey"],
                    type: "object",
                  },
                  type: "array",
                },
              },
              type: "object",
            },
            podAntiAffinity: {
              description:
                "Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)).",
              properties: {
                preferredDuringSchedulingIgnoredDuringExecution: {
                  description:
                    'The scheduler will prefer to schedule pods to nodes that satisfy the anti-affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling anti-affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.',
                  items: {
                    description:
                      "The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s)",
                    properties: {
                      podAffinityTerm: {
                        description:
                          "Required. A pod affinity term, associated with the corresponding weight.",
                        properties: {
                          labelSelector: {
                            description:
                              "A label query over a set of resources, in this case pods.",
                            properties: {
                              matchExpressions: {
                                description:
                                  "matchExpressions is a list of label selector requirements. The requirements are ANDed.",
                                items: {
                                  description:
                                    "A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.",
                                  properties: {
                                    key: {
                                      description:
                                        "key is the label key that the selector applies to.",
                                      type: "string",
                                    },
                                    operator: {
                                      description:
                                        "operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.",
                                      type: "string",
                                    },
                                    values: {
                                      description:
                                        "values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.",
                                      items: {
                                        type: "string",
                                      },
                                      type: "array",
                                    },
                                  },
                                  required: ["key", "operator"],
                                  type: "object",
                                },
                                type: "array",
                              },
                              matchLabels: {
                                additionalProperties: {
                                  type: "string",
                                },
                                description:
                                  'matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.',
                                type: "object",
                              },
                            },
                            type: "object",
                          },
                          namespaces: {
                            description:
                              'namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means "this pod\'s namespace"',
                            items: {
                              type: "string",
                            },
                            type: "array",
                          },
                          topologyKey: {
                            description:
                              "This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.",
                            type: "string",
                          },
                        },
                        required: ["topologyKey"],
                        type: "object",
                      },
                      weight: {
                        description:
                          "weight associated with matching the corresponding podAffinityTerm, in the range 1-100.",
                        format: "int32",
                        type: "integer",
                      },
                    },
                    required: ["podAffinityTerm", "weight"],
                    type: "object",
                  },
                  type: "array",
                },
                requiredDuringSchedulingIgnoredDuringExecution: {
                  description:
                    "If the anti-affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the anti-affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.",
                  items: {
                    description:
                      "Defines a set of pods (namely those matching the labelSelector relative to the given namespace(s)) that this pod should be co-located (affinity) or not co-located (anti-affinity) with, where co-located is defined as running on a node whose value of the label with key <topologyKey> matches that of any node on which a pod of the set of pods is running",
                    properties: {
                      labelSelector: {
                        description:
                          "A label query over a set of resources, in this case pods.",
                        properties: {
                          matchExpressions: {
                            description:
                              "matchExpressions is a list of label selector requirements. The requirements are ANDed.",
                            items: {
                              description:
                                "A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.",
                              properties: {
                                key: {
                                  description:
                                    "key is the label key that the selector applies to.",
                                  type: "string",
                                },
                                operator: {
                                  description:
                                    "operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.",
                                  type: "string",
                                },
                                values: {
                                  description:
                                    "values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.",
                                  items: {
                                    type: "string",
                                  },
                                  type: "array",
                                },
                              },
                              required: ["key", "operator"],
                              type: "object",
                            },
                            type: "array",
                          },
                          matchLabels: {
                            additionalProperties: {
                              type: "string",
                            },
                            description:
                              'matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.',
                            type: "object",
                          },
                        },
                        type: "object",
                      },
                      namespaces: {
                        description:
                          'namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means "this pod\'s namespace"',
                        items: {
                          type: "string",
                        },
                        type: "array",
                      },
                      topologyKey: {
                        description:
                          "This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.",
                        type: "string",
                      },
                    },
                    required: ["topologyKey"],
                    type: "object",
                  },
                  type: "array",
                },
              },
              type: "object",
            },
          },
          type: "object",
        },
        clusterAuthMode: {
          type: "string",
        },
        configSource: {
          properties: {
            configMapName: {
              type: "string",
            },
            secretName: {
              type: "string",
            },
          },
          type: "object",
        },
        controllerAnnotations: {
          additionalProperties: {
            type: "string",
          },
          type: "object",
        },
        databaseSecretName: {
          type: "string",
        },
        fullnameOverride: {
          type: "string",
        },
        grafana: {
          properties: {
            dashboard: {
              properties: {
                annotations: {
                  additionalProperties: {
                    type: "string",
                  },
                  type: "object",
                },
                create: {
                  type: "boolean",
                },
                name: {
                  type: "string",
                },
              },
              required: ["create"],
              type: "object",
            },
            name: {
              type: "string",
            },
          },
          required: ["dashboard", "name"],
          type: "object",
        },
        imagePullSecrets: {
          items: {
            type: "string",
          },
          type: "array",
        },
        init: {
          properties: {
            scriptSource: {
              properties: {
                scriptPath: {
                  type: "string",
                },
                volume: {
                  description:
                    "Represents the source of a volume to mount. Only one of its members may be specified.",
                  properties: {
                    awsElasticBlockStore: {
                      description:
                        "AWSElasticBlockStore represents an AWS Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore",
                      properties: {
                        fsType: {
                          description:
                            'Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore TODO: how do we prevent errors in the filesystem from compromising the machine',
                          type: "string",
                        },
                        partition: {
                          description:
                            'The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty).',
                          format: "int32",
                          type: "integer",
                        },
                        readOnly: {
                          description:
                            'Specify "true" to force and set the ReadOnly property in VolumeMounts to "true". If omitted, the default is "false". More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore',
                          type: "boolean",
                        },
                        volumeID: {
                          description:
                            "Unique ID of the persistent disk resource in AWS (Amazon EBS volume). More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore",
                          type: "string",
                        },
                      },
                      required: ["volumeID"],
                      type: "object",
                    },
                    azureDisk: {
                      description:
                        "AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.",
                      properties: {
                        cachingMode: {
                          description:
                            "Host Caching mode: None, Read Only, Read Write.",
                          type: "string",
                        },
                        diskName: {
                          description:
                            "The Name of the data disk in the blob storage",
                          type: "string",
                        },
                        diskURI: {
                          description:
                            "The URI the data disk in the blob storage",
                          type: "string",
                        },
                        fsType: {
                          description:
                            'Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.',
                          type: "string",
                        },
                        kind: {
                          description:
                            "Expected values Shared: multiple blob disks per storage account  Dedicated: single blob disk per storage account  Managed: azure managed data disk (only in managed availability set). defaults to shared",
                          type: "string",
                        },
                        readOnly: {
                          description:
                            "Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.",
                          type: "boolean",
                        },
                      },
                      required: ["diskName", "diskURI"],
                      type: "object",
                    },
                    azureFile: {
                      description:
                        "AzureFile represents an Azure File Service mount on the host and bind mount to the pod.",
                      properties: {
                        readOnly: {
                          description:
                            "Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.",
                          type: "boolean",
                        },
                        secretName: {
                          description:
                            "the name of secret that contains Azure Storage Account Name and Key",
                          type: "string",
                        },
                        shareName: {
                          description: "Share Name",
                          type: "string",
                        },
                      },
                      required: ["secretName", "shareName"],
                      type: "object",
                    },
                    cephfs: {
                      description:
                        "CephFS represents a Ceph FS mount on the host that shares a pod's lifetime",
                      properties: {
                        monitors: {
                          description:
                            "Required: Monitors is a collection of Ceph monitors More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it",
                          items: {
                            type: "string",
                          },
                          type: "array",
                        },
                        path: {
                          description:
                            "Optional: Used as the mounted root, rather than the full Ceph tree, default is /",
                          type: "string",
                        },
                        readOnly: {
                          description:
                            "Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it",
                          type: "boolean",
                        },
                        secretFile: {
                          description:
                            "Optional: SecretFile is the path to key ring for User, default is /etc/ceph/user.secret More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it",
                          type: "string",
                        },
                        secretRef: {
                          description:
                            "Optional: SecretRef is reference to the authentication secret for User, default is empty. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it",
                          properties: {
                            name: {
                              description:
                                "Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?",
                              type: "string",
                            },
                          },
                          type: "object",
                        },
                        user: {
                          description:
                            "Optional: User is the rados user name, default is admin More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it",
                          type: "string",
                        },
                      },
                      required: ["monitors"],
                      type: "object",
                    },
                    cinder: {
                      description:
                        "Cinder represents a cinder volume attached and mounted on kubelets host machine. More info: https://examples.k8s.io/mysql-cinder-pd/README.md",
                      properties: {
                        fsType: {
                          description:
                            'Filesystem type to mount. Must be a filesystem type supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://examples.k8s.io/mysql-cinder-pd/README.md',
                          type: "string",
                        },
                        readOnly: {
                          description:
                            "Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/mysql-cinder-pd/README.md",
                          type: "boolean",
                        },
                        secretRef: {
                          description:
                            "Optional: points to a secret object containing parameters used to connect to OpenStack.",
                          properties: {
                            name: {
                              description:
                                "Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?",
                              type: "string",
                            },
                          },
                          type: "object",
                        },
                        volumeID: {
                          description:
                            "volume id used to identify the volume in cinder. More info: https://examples.k8s.io/mysql-cinder-pd/README.md",
                          type: "string",
                        },
                      },
                      required: ["volumeID"],
                      type: "object",
                    },
                    configMap: {
                      description:
                        "ConfigMap represents a configMap that should populate this volume",
                      properties: {
                        defaultMode: {
                          description:
                            "Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.",
                          format: "int32",
                          type: "integer",
                        },
                        items: {
                          description:
                            "If unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.",
                          items: {
                            description:
                              "Maps a string key to a path within a volume.",
                            properties: {
                              key: {
                                description: "The key to project.",
                                type: "string",
                              },
                              mode: {
                                description:
                                  "Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.",
                                format: "int32",
                                type: "integer",
                              },
                              path: {
                                description:
                                  "The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.",
                                type: "string",
                              },
                            },
                            required: ["key", "path"],
                            type: "object",
                          },
                          type: "array",
                        },
                        name: {
                          description:
                            "Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?",
                          type: "string",
                        },
                        optional: {
                          description:
                            "Specify whether the ConfigMap or its keys must be defined",
                          type: "boolean",
                        },
                      },
                      type: "object",
                    },
                    csi: {
                      description:
                        "CSI (Container Storage Interface) represents storage that is handled by an external CSI driver (Alpha feature).",
                      properties: {
                        driver: {
                          description:
                            "Driver is the name of the CSI driver that handles this volume. Consult with your admin for the correct name as registered in the cluster.",
                          type: "string",
                        },
                        fsType: {
                          description:
                            'Filesystem type to mount. Ex. "ext4", "xfs", "ntfs". If not provided, the empty value is passed to the associated CSI driver which will determine the default filesystem to apply.',
                          type: "string",
                        },
                        nodePublishSecretRef: {
                          description:
                            "NodePublishSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI NodePublishVolume and NodeUnpublishVolume calls. This field is optional, and  may be empty if no secret is required. If the secret object contains more than one secret, all secret references are passed.",
                          properties: {
                            name: {
                              description:
                                "Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?",
                              type: "string",
                            },
                          },
                          type: "object",
                        },
                        readOnly: {
                          description:
                            "Specifies a read-only configuration for the volume. Defaults to false (read/write).",
                          type: "boolean",
                        },
                        volumeAttributes: {
                          additionalProperties: {
                            type: "string",
                          },
                          description:
                            "VolumeAttributes stores driver-specific properties that are passed to the CSI driver. Consult your driver's documentation for supported values.",
                          type: "object",
                        },
                      },
                      required: ["driver"],
                      type: "object",
                    },
                    downwardAPI: {
                      description:
                        "DownwardAPI represents downward API about the pod that should populate this volume",
                      properties: {
                        defaultMode: {
                          description:
                            "Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.",
                          format: "int32",
                          type: "integer",
                        },
                        items: {
                          description:
                            "Items is a list of downward API volume file",
                          items: {
                            description:
                              "DownwardAPIVolumeFile represents information to create the file containing the pod field",
                            properties: {
                              fieldRef: {
                                description:
                                  "Required: Selects a field of the pod: only annotations, labels, name and namespace are supported.",
                                properties: {
                                  apiVersion: {
                                    description:
                                      'Version of the schema the FieldPath is written in terms of, defaults to "v1".',
                                    type: "string",
                                  },
                                  fieldPath: {
                                    description:
                                      "Path of the field to select in the specified API version.",
                                    type: "string",
                                  },
                                },
                                required: ["fieldPath"],
                                type: "object",
                              },
                              mode: {
                                description:
                                  "Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.",
                                format: "int32",
                                type: "integer",
                              },
                              path: {
                                description:
                                  "Required: Path is  the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'",
                                type: "string",
                              },
                              resourceFieldRef: {
                                description:
                                  "Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported.",
                                properties: {
                                  containerName: {
                                    description:
                                      "Container name: required for volumes, optional for env vars",
                                    type: "string",
                                  },
                                  divisor: {
                                    description:
                                      'Specifies the output format of the exposed resources, defaults to "1"',
                                    type: "string",
                                  },
                                  resource: {
                                    description: "Required: resource to select",
                                    type: "string",
                                  },
                                },
                                required: ["resource"],
                                type: "object",
                              },
                            },
                            required: ["path"],
                            type: "object",
                          },
                          type: "array",
                        },
                      },
                      type: "object",
                    },
                    emptyDir: {
                      description:
                        "EmptyDir represents a temporary directory that shares a pod's lifetime. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir",
                      properties: {
                        medium: {
                          description:
                            'What type of storage medium should back this directory. The default is "" which means to use the node\'s default medium. Must be an empty string (default) or Memory. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir',
                          type: "string",
                        },
                        sizeLimit: {
                          description:
                            "Total amount of local storage required for this EmptyDir volume. The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers in a pod. The default is nil which means that the limit is undefined. More info: http://kubernetes.io/docs/user-guide/volumes#emptydir",
                          type: "string",
                        },
                      },
                      type: "object",
                    },
                    fc: {
                      description:
                        "FC represents a Fibre Channel resource that is attached to a kubelet's host machine and then exposed to the pod.",
                      properties: {
                        fsType: {
                          description:
                            'Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. TODO: how do we prevent errors in the filesystem from compromising the machine',
                          type: "string",
                        },
                        lun: {
                          description: "Optional: FC target lun number",
                          format: "int32",
                          type: "integer",
                        },
                        readOnly: {
                          description:
                            "Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.",
                          type: "boolean",
                        },
                        targetWWNs: {
                          description:
                            "Optional: FC target worldwide names (WWNs)",
                          items: {
                            type: "string",
                          },
                          type: "array",
                        },
                        wwids: {
                          description:
                            "Optional: FC volume world wide identifiers (wwids) Either wwids or combination of targetWWNs and lun must be set, but not both simultaneously.",
                          items: {
                            type: "string",
                          },
                          type: "array",
                        },
                      },
                      type: "object",
                    },
                    flexVolume: {
                      description:
                        "FlexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.",
                      properties: {
                        driver: {
                          description:
                            "Driver is the name of the driver to use for this volume.",
                          type: "string",
                        },
                        fsType: {
                          description:
                            'Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". The default filesystem depends on FlexVolume script.',
                          type: "string",
                        },
                        options: {
                          additionalProperties: {
                            type: "string",
                          },
                          description:
                            "Optional: Extra command options if any.",
                          type: "object",
                        },
                        readOnly: {
                          description:
                            "Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.",
                          type: "boolean",
                        },
                        secretRef: {
                          description:
                            "Optional: SecretRef is reference to the secret object containing sensitive information to pass to the plugin scripts. This may be empty if no secret object is specified. If the secret object contains more than one secret, all secrets are passed to the plugin scripts.",
                          properties: {
                            name: {
                              description:
                                "Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?",
                              type: "string",
                            },
                          },
                          type: "object",
                        },
                      },
                      required: ["driver"],
                      type: "object",
                    },
                    flocker: {
                      description:
                        "Flocker represents a Flocker volume attached to a kubelet's host machine. This depends on the Flocker control service being running",
                      properties: {
                        datasetName: {
                          description:
                            "Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated",
                          type: "string",
                        },
                        datasetUUID: {
                          description:
                            "UUID of the dataset. This is unique identifier of a Flocker dataset",
                          type: "string",
                        },
                      },
                      type: "object",
                    },
                    gcePersistentDisk: {
                      description:
                        "GCEPersistentDisk represents a GCE Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk",
                      properties: {
                        fsType: {
                          description:
                            'Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk TODO: how do we prevent errors in the filesystem from compromising the machine',
                          type: "string",
                        },
                        partition: {
                          description:
                            'The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty). More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk',
                          format: "int32",
                          type: "integer",
                        },
                        pdName: {
                          description:
                            "Unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk",
                          type: "string",
                        },
                        readOnly: {
                          description:
                            "ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk",
                          type: "boolean",
                        },
                      },
                      required: ["pdName"],
                      type: "object",
                    },
                    gitRepo: {
                      description:
                        "GitRepo represents a git repository at a particular revision. DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container.",
                      properties: {
                        directory: {
                          description:
                            "Target directory name. Must not contain or start with '..'.  If '.' is supplied, the volume directory will be the git repository.  Otherwise, if specified, the volume will contain the git repository in the subdirectory with the given name.",
                          type: "string",
                        },
                        repository: {
                          description: "Repository URL",
                          type: "string",
                        },
                        revision: {
                          description:
                            "Commit hash for the specified revision.",
                          type: "string",
                        },
                      },
                      required: ["repository"],
                      type: "object",
                    },
                    glusterfs: {
                      description:
                        "Glusterfs represents a Glusterfs mount on the host that shares a pod's lifetime. More info: https://examples.k8s.io/volumes/glusterfs/README.md",
                      properties: {
                        endpoints: {
                          description:
                            "EndpointsName is the endpoint name that details Glusterfs topology. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod",
                          type: "string",
                        },
                        path: {
                          description:
                            "Path is the Glusterfs volume path. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod",
                          type: "string",
                        },
                        readOnly: {
                          description:
                            "ReadOnly here will force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod",
                          type: "boolean",
                        },
                      },
                      required: ["endpoints", "path"],
                      type: "object",
                    },
                    hostPath: {
                      description:
                        "HostPath represents a pre-existing file or directory on the host machine that is directly exposed to the container. This is generally used for system agents or other privileged things that are allowed to see the host machine. Most containers will NOT need this. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath --- TODO(jonesdl) We need to restrict who can use host directory mounts and who can/can not mount host directories as read/write.",
                      properties: {
                        path: {
                          description:
                            "Path of the directory on the host. If the path is a symlink, it will follow the link to the real path. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath",
                          type: "string",
                        },
                        type: {
                          description:
                            'Type for HostPath Volume Defaults to "" More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath',
                          type: "string",
                        },
                      },
                      required: ["path"],
                      type: "object",
                    },
                    iscsi: {
                      description:
                        "ISCSI represents an ISCSI Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://examples.k8s.io/volumes/iscsi/README.md",
                      properties: {
                        chapAuthDiscovery: {
                          description:
                            "whether support iSCSI Discovery CHAP authentication",
                          type: "boolean",
                        },
                        chapAuthSession: {
                          description:
                            "whether support iSCSI Session CHAP authentication",
                          type: "boolean",
                        },
                        fsType: {
                          description:
                            'Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#iscsi TODO: how do we prevent errors in the filesystem from compromising the machine',
                          type: "string",
                        },
                        initiatorName: {
                          description:
                            "Custom iSCSI Initiator Name. If initiatorName is specified with iscsiInterface simultaneously, new iSCSI interface <target portal>:<volume name> will be created for the connection.",
                          type: "string",
                        },
                        iqn: {
                          description: "Target iSCSI Qualified Name.",
                          type: "string",
                        },
                        iscsiInterface: {
                          description:
                            "iSCSI Interface Name that uses an iSCSI transport. Defaults to 'default' (tcp).",
                          type: "string",
                        },
                        lun: {
                          description: "iSCSI Target Lun number.",
                          format: "int32",
                          type: "integer",
                        },
                        portals: {
                          description:
                            "iSCSI Target Portal List. The portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).",
                          items: {
                            type: "string",
                          },
                          type: "array",
                        },
                        readOnly: {
                          description:
                            "ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false.",
                          type: "boolean",
                        },
                        secretRef: {
                          description:
                            "CHAP Secret for iSCSI target and initiator authentication",
                          properties: {
                            name: {
                              description:
                                "Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?",
                              type: "string",
                            },
                          },
                          type: "object",
                        },
                        targetPortal: {
                          description:
                            "iSCSI Target Portal. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).",
                          type: "string",
                        },
                      },
                      required: ["iqn", "lun", "targetPortal"],
                      type: "object",
                    },
                    nfs: {
                      description:
                        "NFS represents an NFS mount on the host that shares a pod's lifetime More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs",
                      properties: {
                        path: {
                          description:
                            "Path that is exported by the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs",
                          type: "string",
                        },
                        readOnly: {
                          description:
                            "ReadOnly here will force the NFS export to be mounted with read-only permissions. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs",
                          type: "boolean",
                        },
                        server: {
                          description:
                            "Server is the hostname or IP address of the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs",
                          type: "string",
                        },
                      },
                      required: ["path", "server"],
                      type: "object",
                    },
                    persistentVolumeClaim: {
                      description:
                        "PersistentVolumeClaimVolumeSource represents a reference to a PersistentVolumeClaim in the same namespace. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims",
                      properties: {
                        claimName: {
                          description:
                            "ClaimName is the name of a PersistentVolumeClaim in the same namespace as the pod using this volume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims",
                          type: "string",
                        },
                        readOnly: {
                          description:
                            "Will force the ReadOnly setting in VolumeMounts. Default false.",
                          type: "boolean",
                        },
                      },
                      required: ["claimName"],
                      type: "object",
                    },
                    photonPersistentDisk: {
                      description:
                        "PhotonPersistentDisk represents a PhotonController persistent disk attached and mounted on kubelets host machine",
                      properties: {
                        fsType: {
                          description:
                            'Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.',
                          type: "string",
                        },
                        pdID: {
                          description:
                            "ID that identifies Photon Controller persistent disk",
                          type: "string",
                        },
                      },
                      required: ["pdID"],
                      type: "object",
                    },
                    portworxVolume: {
                      description:
                        "PortworxVolume represents a portworx volume attached and mounted on kubelets host machine",
                      properties: {
                        fsType: {
                          description:
                            'FSType represents the filesystem type to mount Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs". Implicitly inferred to be "ext4" if unspecified.',
                          type: "string",
                        },
                        readOnly: {
                          description:
                            "Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.",
                          type: "boolean",
                        },
                        volumeID: {
                          description:
                            "VolumeID uniquely identifies a Portworx volume",
                          type: "string",
                        },
                      },
                      required: ["volumeID"],
                      type: "object",
                    },
                    projected: {
                      description:
                        "Items for all in one resources secrets, configmaps, and downward API",
                      properties: {
                        defaultMode: {
                          description:
                            "Mode bits to use on created files by default. Must be a value between 0 and 0777. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.",
                          format: "int32",
                          type: "integer",
                        },
                        sources: {
                          description: "list of volume projections",
                          items: {
                            description:
                              "Projection that may be projected along with other supported volume types",
                            properties: {
                              configMap: {
                                description:
                                  "information about the configMap data to project",
                                properties: {
                                  items: {
                                    description:
                                      "If unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.",
                                    items: {
                                      description:
                                        "Maps a string key to a path within a volume.",
                                      properties: {
                                        key: {
                                          description: "The key to project.",
                                          type: "string",
                                        },
                                        mode: {
                                          description:
                                            "Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.",
                                          format: "int32",
                                          type: "integer",
                                        },
                                        path: {
                                          description:
                                            "The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.",
                                          type: "string",
                                        },
                                      },
                                      required: ["key", "path"],
                                      type: "object",
                                    },
                                    type: "array",
                                  },
                                  name: {
                                    description:
                                      "Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?",
                                    type: "string",
                                  },
                                  optional: {
                                    description:
                                      "Specify whether the ConfigMap or its keys must be defined",
                                    type: "boolean",
                                  },
                                },
                                type: "object",
                              },
                              downwardAPI: {
                                description:
                                  "information about the downwardAPI data to project",
                                properties: {
                                  items: {
                                    description:
                                      "Items is a list of DownwardAPIVolume file",
                                    items: {
                                      description:
                                        "DownwardAPIVolumeFile represents information to create the file containing the pod field",
                                      properties: {
                                        fieldRef: {
                                          description:
                                            "Required: Selects a field of the pod: only annotations, labels, name and namespace are supported.",
                                          properties: {
                                            apiVersion: {
                                              description:
                                                'Version of the schema the FieldPath is written in terms of, defaults to "v1".',
                                              type: "string",
                                            },
                                            fieldPath: {
                                              description:
                                                "Path of the field to select in the specified API version.",
                                              type: "string",
                                            },
                                          },
                                          required: ["fieldPath"],
                                          type: "object",
                                        },
                                        mode: {
                                          description:
                                            "Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.",
                                          format: "int32",
                                          type: "integer",
                                        },
                                        path: {
                                          description:
                                            "Required: Path is  the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'",
                                          type: "string",
                                        },
                                        resourceFieldRef: {
                                          description:
                                            "Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported.",
                                          properties: {
                                            containerName: {
                                              description:
                                                "Container name: required for volumes, optional for env vars",
                                              type: "string",
                                            },
                                            divisor: {
                                              description:
                                                'Specifies the output format of the exposed resources, defaults to "1"',
                                              type: "string",
                                            },
                                            resource: {
                                              description:
                                                "Required: resource to select",
                                              type: "string",
                                            },
                                          },
                                          required: ["resource"],
                                          type: "object",
                                        },
                                      },
                                      required: ["path"],
                                      type: "object",
                                    },
                                    type: "array",
                                  },
                                },
                                type: "object",
                              },
                              secret: {
                                description:
                                  "information about the secret data to project",
                                properties: {
                                  items: {
                                    description:
                                      "If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.",
                                    items: {
                                      description:
                                        "Maps a string key to a path within a volume.",
                                      properties: {
                                        key: {
                                          description: "The key to project.",
                                          type: "string",
                                        },
                                        mode: {
                                          description:
                                            "Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.",
                                          format: "int32",
                                          type: "integer",
                                        },
                                        path: {
                                          description:
                                            "The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.",
                                          type: "string",
                                        },
                                      },
                                      required: ["key", "path"],
                                      type: "object",
                                    },
                                    type: "array",
                                  },
                                  name: {
                                    description:
                                      "Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?",
                                    type: "string",
                                  },
                                  optional: {
                                    description:
                                      "Specify whether the Secret or its key must be defined",
                                    type: "boolean",
                                  },
                                },
                                type: "object",
                              },
                              serviceAccountToken: {
                                description:
                                  "information about the serviceAccountToken data to project",
                                properties: {
                                  audience: {
                                    description:
                                      "Audience is the intended audience of the token. A recipient of a token must identify itself with an identifier specified in the audience of the token, and otherwise should reject the token. The audience defaults to the identifier of the apiserver.",
                                    type: "string",
                                  },
                                  expirationSeconds: {
                                    description:
                                      "ExpirationSeconds is the requested duration of validity of the service account token. As the token approaches expiration, the kubelet volume plugin will proactively rotate the service account token. The kubelet will start trying to rotate the token if the token is older than 80 percent of its time to live or if the token is older than 24 hours.Defaults to 1 hour and must be at least 10 minutes.",
                                    format: "int64",
                                    type: "integer",
                                  },
                                  path: {
                                    description:
                                      "Path is the path relative to the mount point of the file to project the token into.",
                                    type: "string",
                                  },
                                },
                                required: ["path"],
                                type: "object",
                              },
                            },
                            type: "object",
                          },
                          type: "array",
                        },
                      },
                      required: ["sources"],
                      type: "object",
                    },
                    quobyte: {
                      description:
                        "Quobyte represents a Quobyte mount on the host that shares a pod's lifetime",
                      properties: {
                        group: {
                          description:
                            "Group to map volume access to Default is no group",
                          type: "string",
                        },
                        readOnly: {
                          description:
                            "ReadOnly here will force the Quobyte volume to be mounted with read-only permissions. Defaults to false.",
                          type: "boolean",
                        },
                        registry: {
                          description:
                            "Registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes",
                          type: "string",
                        },
                        tenant: {
                          description:
                            "Tenant owning the given Quobyte volume in the Backend Used with dynamically provisioned Quobyte volumes, value is set by the plugin",
                          type: "string",
                        },
                        user: {
                          description:
                            "User to map volume access to Defaults to serivceaccount user",
                          type: "string",
                        },
                        volume: {
                          description:
                            "Volume is a string that references an already created Quobyte volume by name.",
                          type: "string",
                        },
                      },
                      required: ["registry", "volume"],
                      type: "object",
                    },
                    rbd: {
                      description:
                        "RBD represents a Rados Block Device mount on the host that shares a pod's lifetime. More info: https://examples.k8s.io/volumes/rbd/README.md",
                      properties: {
                        fsType: {
                          description:
                            'Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#rbd TODO: how do we prevent errors in the filesystem from compromising the machine',
                          type: "string",
                        },
                        image: {
                          description:
                            "The rados image name. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it",
                          type: "string",
                        },
                        keyring: {
                          description:
                            "Keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it",
                          type: "string",
                        },
                        monitors: {
                          description:
                            "A collection of Ceph monitors. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it",
                          items: {
                            type: "string",
                          },
                          type: "array",
                        },
                        pool: {
                          description:
                            "The rados pool name. Default is rbd. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it",
                          type: "string",
                        },
                        readOnly: {
                          description:
                            "ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it",
                          type: "boolean",
                        },
                        secretRef: {
                          description:
                            "SecretRef is name of the authentication secret for RBDUser. If provided overrides keyring. Default is nil. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it",
                          properties: {
                            name: {
                              description:
                                "Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?",
                              type: "string",
                            },
                          },
                          type: "object",
                        },
                        user: {
                          description:
                            "The rados user name. Default is admin. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it",
                          type: "string",
                        },
                      },
                      required: ["image", "monitors"],
                      type: "object",
                    },
                    scaleIO: {
                      description:
                        "ScaleIO represents a ScaleIO persistent volume attached and mounted on Kubernetes nodes.",
                      properties: {
                        fsType: {
                          description:
                            'Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Default is "xfs".',
                          type: "string",
                        },
                        gateway: {
                          description:
                            "The host address of the ScaleIO API Gateway.",
                          type: "string",
                        },
                        protectionDomain: {
                          description:
                            "The name of the ScaleIO Protection Domain for the configured storage.",
                          type: "string",
                        },
                        readOnly: {
                          description:
                            "Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.",
                          type: "boolean",
                        },
                        secretRef: {
                          description:
                            "SecretRef references to the secret for ScaleIO user and other sensitive information. If this is not provided, Login operation will fail.",
                          properties: {
                            name: {
                              description:
                                "Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?",
                              type: "string",
                            },
                          },
                          type: "object",
                        },
                        sslEnabled: {
                          description:
                            "Flag to enable/disable SSL communication with Gateway, default false",
                          type: "boolean",
                        },
                        storageMode: {
                          description:
                            "Indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned. Default is ThinProvisioned.",
                          type: "string",
                        },
                        storagePool: {
                          description:
                            "The ScaleIO Storage Pool associated with the protection domain.",
                          type: "string",
                        },
                        system: {
                          description:
                            "The name of the storage system as configured in ScaleIO.",
                          type: "string",
                        },
                        volumeName: {
                          description:
                            "The name of a volume already created in the ScaleIO system that is associated with this volume source.",
                          type: "string",
                        },
                      },
                      required: ["gateway", "secretRef", "system"],
                      type: "object",
                    },
                    secret: {
                      description:
                        "Secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret",
                      properties: {
                        defaultMode: {
                          description:
                            "Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.",
                          format: "int32",
                          type: "integer",
                        },
                        items: {
                          description:
                            "If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.",
                          items: {
                            description:
                              "Maps a string key to a path within a volume.",
                            properties: {
                              key: {
                                description: "The key to project.",
                                type: "string",
                              },
                              mode: {
                                description:
                                  "Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.",
                                format: "int32",
                                type: "integer",
                              },
                              path: {
                                description:
                                  "The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.",
                                type: "string",
                              },
                            },
                            required: ["key", "path"],
                            type: "object",
                          },
                          type: "array",
                        },
                        optional: {
                          description:
                            "Specify whether the Secret or its keys must be defined",
                          type: "boolean",
                        },
                        secretName: {
                          description:
                            "Name of the secret in the pod's namespace to use. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret",
                          type: "string",
                        },
                      },
                      type: "object",
                    },
                    storageos: {
                      description:
                        "StorageOS represents a StorageOS volume attached and mounted on Kubernetes nodes.",
                      properties: {
                        fsType: {
                          description:
                            'Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.',
                          type: "string",
                        },
                        readOnly: {
                          description:
                            "Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.",
                          type: "boolean",
                        },
                        secretRef: {
                          description:
                            "SecretRef specifies the secret to use for obtaining the StorageOS API credentials.  If not specified, default values will be attempted.",
                          properties: {
                            name: {
                              description:
                                "Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?",
                              type: "string",
                            },
                          },
                          type: "object",
                        },
                        volumeName: {
                          description:
                            "VolumeName is the human-readable name of the StorageOS volume.  Volume names are only unique within a namespace.",
                          type: "string",
                        },
                        volumeNamespace: {
                          description:
                            'VolumeNamespace specifies the scope of the volume within StorageOS.  If no namespace is specified then the Pod\'s namespace will be used.  This allows the Kubernetes name scoping to be mirrored within StorageOS for tighter integration. Set VolumeName to any name to override the default behaviour. Set to "default" if you are not using namespaces within StorageOS. Namespaces that do not pre-exist within StorageOS will be created.',
                          type: "string",
                        },
                      },
                      type: "object",
                    },
                    vsphereVolume: {
                      description:
                        "VsphereVolume represents a vSphere volume attached and mounted on kubelets host machine",
                      properties: {
                        fsType: {
                          description:
                            'Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.',
                          type: "string",
                        },
                        storagePolicyID: {
                          description:
                            "Storage Policy Based Management (SPBM) profile ID associated with the StoragePolicyName.",
                          type: "string",
                        },
                        storagePolicyName: {
                          description:
                            "Storage Policy Based Management (SPBM) profile name.",
                          type: "string",
                        },
                        volumePath: {
                          description:
                            "Path that identifies vSphere volume vmdk",
                          type: "string",
                        },
                      },
                      required: ["volumePath"],
                      type: "object",
                    },
                  },
                  type: "object",
                },
              },
              required: ["scriptPath", "volume"],
              type: "object",
            },
            stashRestoreSession: {
              properties: {
                name: {
                  type: "string",
                },
              },
              required: ["name"],
              type: "object",
            },
          },
          type: "object",
        },
        keyFileSecretName: {
          type: "string",
        },
        machine: {
          type: "string",
        },
        mode: {
          type: "string",
        },
        monitoring: {
          properties: {
            agent: {
              type: "string",
            },
            enabled: {
              type: "boolean",
            },
            prometheus: {
              properties: {
                namespace: {
                  type: "string",
                },
              },
              type: "object",
            },
            serviceMonitor: {
              properties: {
                labels: {
                  additionalProperties: {
                    type: "string",
                  },
                  type: "object",
                },
              },
              type: "object",
            },
          },
          required: ["agent", "enabled", "prometheus", "serviceMonitor"],
          type: "object",
        },
        nameOverride: {
          type: "string",
        },
        nodeSelector: {
          additionalProperties: {
            type: "string",
          },
          type: "object",
        },
        persistence: {
          properties: {
            accessModes: {
              items: {
                type: "string",
              },
              type: "array",
            },
            size: {
              type: "string",
            },
            type: {
              type: "string",
            },
          },
          required: ["accessModes", "size", "type"],
          type: "object",
        },
        podAnnotations: {
          additionalProperties: {
            type: "string",
          },
          type: "object",
        },
        replicaSet: {
          properties: {
            name: {
              type: "string",
            },
            replicas: {
              format: "int32",
              type: "integer",
            },
          },
          required: ["name", "replicas"],
          type: "object",
        },
        resources: {
          description:
            "ResourceRequirements describes the compute resource requirements.",
          properties: {
            limits: {
              additionalProperties: {
                type: "string",
              },
              description:
                "Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/",
              type: "object",
            },
            requests: {
              additionalProperties: {
                type: "string",
              },
              description:
                "Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/",
              type: "object",
            },
          },
          type: "object",
        },
        securityContext: {
          description:
            "PodSecurityContext holds pod-level security attributes and common container settings. Some fields are also present in container.securityContext.  Field values of container.securityContext take precedence over field values of PodSecurityContext.",
          properties: {
            fsGroup: {
              description:
                "A special supplemental group that applies to all containers in a pod. Some volume types allow the Kubelet to change the ownership of that volume to be owned by the pod: \n 1. The owning GID will be the FSGroup 2. The setgid bit is set (new files created in the volume will be owned by FSGroup) 3. The permission bits are OR'd with rw-rw---- \n If unset, the Kubelet will not modify the ownership and permissions of any volume.",
              format: "int64",
              type: "integer",
            },
            runAsGroup: {
              description:
                "The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container.",
              format: "int64",
              type: "integer",
            },
            runAsNonRoot: {
              description:
                "Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.",
              type: "boolean",
            },
            runAsUser: {
              description:
                "The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container.",
              format: "int64",
              type: "integer",
            },
            seLinuxOptions: {
              description:
                "The SELinux context to be applied to all containers. If unspecified, the container runtime will allocate a random SELinux context for each container.  May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container.",
              properties: {
                level: {
                  description:
                    "Level is SELinux level label that applies to the container.",
                  type: "string",
                },
                role: {
                  description:
                    "Role is a SELinux role label that applies to the container.",
                  type: "string",
                },
                type: {
                  description:
                    "Type is a SELinux type label that applies to the container.",
                  type: "string",
                },
                user: {
                  description:
                    "User is a SELinux user label that applies to the container.",
                  type: "string",
                },
              },
              type: "object",
            },
            supplementalGroups: {
              description:
                "A list of groups applied to the first process run in each container, in addition to the container's primary GID.  If unspecified, no groups will be added to any container.",
              items: {
                format: "int64",
                type: "integer",
              },
              type: "array",
            },
            sysctls: {
              description:
                "Sysctls hold a list of namespaced sysctls used for the pod. Pods with unsupported sysctls (by the container runtime) might fail to launch.",
              items: {
                description: "Sysctl defines a kernel parameter to be set",
                properties: {
                  name: {
                    description: "Name of a property to set",
                    type: "string",
                  },
                  value: {
                    description: "Value of a property to set",
                    type: "string",
                  },
                },
                required: ["name", "value"],
                type: "object",
              },
              type: "array",
            },
            windowsOptions: {
              description:
                "The Windows specific settings applied to all containers. If unspecified, the options within a container's SecurityContext will be used. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.",
              properties: {
                gmsaCredentialSpec: {
                  description:
                    "GMSACredentialSpec is where the GMSA admission webhook (https://github.com/kubernetes-sigs/windows-gmsa) inlines the contents of the GMSA credential spec named by the GMSACredentialSpecName field. This field is alpha-level and is only honored by servers that enable the WindowsGMSA feature flag.",
                  type: "string",
                },
                gmsaCredentialSpecName: {
                  description:
                    "GMSACredentialSpecName is the name of the GMSA credential spec to use. This field is alpha-level and is only honored by servers that enable the WindowsGMSA feature flag.",
                  type: "string",
                },
                runAsUserName: {
                  description:
                    "The UserName in Windows to run the entrypoint of the container process. Defaults to the user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. This field is alpha-level and it is only honored by servers that enable the WindowsRunAsUserName feature flag.",
                  type: "string",
                },
              },
              type: "object",
            },
          },
          type: "object",
        },
        service: {
          properties: {
            annotations: {
              additionalProperties: {
                type: "string",
              },
              type: "object",
            },
            externalIPs: {
              items: {
                type: "string",
              },
              type: "array",
            },
            loadBalancerIP: {
              type: "string",
            },
            type: {
              type: "string",
            },
          },
          required: ["type"],
          type: "object",
        },
        serviceAccount: {
          properties: {
            create: {
              type: "boolean",
            },
            name: {
              type: "string",
            },
          },
          required: ["create"],
          type: "object",
        },
        shardTopology: {
          properties: {
            configServer: {
              properties: {
                replicas: {
                  format: "int32",
                  type: "integer",
                },
              },
              required: ["replicas"],
              type: "object",
            },
            mongos: {
              properties: {
                replicas: {
                  format: "int32",
                  type: "integer",
                },
              },
              required: ["replicas"],
              type: "object",
            },
            shard: {
              properties: {
                replicas: {
                  format: "int32",
                  type: "integer",
                },
                shards: {
                  format: "int32",
                  type: "integer",
                },
              },
              required: ["replicas", "shards"],
              type: "object",
            },
          },
          required: ["configServer", "mongos", "shard"],
          type: "object",
        },
        sslMode: {
          type: "string",
        },
        stash: {
          properties: {
            backupInvoker: {
              properties: {
                annotations: {
                  additionalProperties: {
                    type: "string",
                  },
                  type: "object",
                },
                create: {
                  type: "boolean",
                },
                name: {
                  type: "string",
                },
                type: {
                  type: "string",
                },
              },
              required: ["create", "type"],
              type: "object",
            },
            podSecurityContext: {
              description:
                "PodSecurityContext holds pod-level security attributes and common container settings. Some fields are also present in container.securityContext.  Field values of container.securityContext take precedence over field values of PodSecurityContext.",
              properties: {
                fsGroup: {
                  description:
                    "A special supplemental group that applies to all containers in a pod. Some volume types allow the Kubelet to change the ownership of that volume to be owned by the pod: \n 1. The owning GID will be the FSGroup 2. The setgid bit is set (new files created in the volume will be owned by FSGroup) 3. The permission bits are OR'd with rw-rw---- \n If unset, the Kubelet will not modify the ownership and permissions of any volume.",
                  format: "int64",
                  type: "integer",
                },
                runAsGroup: {
                  description:
                    "The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container.",
                  format: "int64",
                  type: "integer",
                },
                runAsNonRoot: {
                  description:
                    "Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.",
                  type: "boolean",
                },
                runAsUser: {
                  description:
                    "The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container.",
                  format: "int64",
                  type: "integer",
                },
                seLinuxOptions: {
                  description:
                    "The SELinux context to be applied to all containers. If unspecified, the container runtime will allocate a random SELinux context for each container.  May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container.",
                  properties: {
                    level: {
                      description:
                        "Level is SELinux level label that applies to the container.",
                      type: "string",
                    },
                    role: {
                      description:
                        "Role is a SELinux role label that applies to the container.",
                      type: "string",
                    },
                    type: {
                      description:
                        "Type is a SELinux type label that applies to the container.",
                      type: "string",
                    },
                    user: {
                      description:
                        "User is a SELinux user label that applies to the container.",
                      type: "string",
                    },
                  },
                  type: "object",
                },
                supplementalGroups: {
                  description:
                    "A list of groups applied to the first process run in each container, in addition to the container's primary GID.  If unspecified, no groups will be added to any container.",
                  items: {
                    format: "int64",
                    type: "integer",
                  },
                  type: "array",
                },
                sysctls: {
                  description:
                    "Sysctls hold a list of namespaced sysctls used for the pod. Pods with unsupported sysctls (by the container runtime) might fail to launch.",
                  items: {
                    description: "Sysctl defines a kernel parameter to be set",
                    properties: {
                      name: {
                        description: "Name of a property to set",
                        type: "string",
                      },
                      value: {
                        description: "Value of a property to set",
                        type: "string",
                      },
                    },
                    required: ["name", "value"],
                    type: "object",
                  },
                  type: "array",
                },
                windowsOptions: {
                  description:
                    "The Windows specific settings applied to all containers. If unspecified, the options within a container's SecurityContext will be used. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.",
                  properties: {
                    gmsaCredentialSpec: {
                      description:
                        "GMSACredentialSpec is where the GMSA admission webhook (https://github.com/kubernetes-sigs/windows-gmsa) inlines the contents of the GMSA credential spec named by the GMSACredentialSpecName field. This field is alpha-level and is only honored by servers that enable the WindowsGMSA feature flag.",
                      type: "string",
                    },
                    gmsaCredentialSpecName: {
                      description:
                        "GMSACredentialSpecName is the name of the GMSA credential spec to use. This field is alpha-level and is only honored by servers that enable the WindowsGMSA feature flag.",
                      type: "string",
                    },
                    runAsUserName: {
                      description:
                        "The UserName in Windows to run the entrypoint of the container process. Defaults to the user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. This field is alpha-level and it is only honored by servers that enable the WindowsRunAsUserName feature flag.",
                      type: "string",
                    },
                  },
                  type: "object",
                },
              },
              type: "object",
            },
            repository: {
              properties: {
                annotations: {
                  additionalProperties: {
                    type: "string",
                  },
                  type: "object",
                },
                backend: {
                  properties: {
                    azure: {
                      properties: {
                        container: {
                          type: "string",
                        },
                        maxConnections: {
                          format: "int64",
                          type: "integer",
                        },
                        prefix: {
                          type: "string",
                        },
                      },
                      type: "object",
                    },
                    b2: {
                      properties: {
                        bucket: {
                          type: "string",
                        },
                        maxConnections: {
                          format: "int64",
                          type: "integer",
                        },
                        prefix: {
                          type: "string",
                        },
                      },
                      type: "object",
                    },
                    gcs: {
                      properties: {
                        bucket: {
                          type: "string",
                        },
                        maxConnections: {
                          format: "int64",
                          type: "integer",
                        },
                        prefix: {
                          type: "string",
                        },
                      },
                      type: "object",
                    },
                    local: {
                      properties: {
                        awsElasticBlockStore: {
                          description:
                            "AWSElasticBlockStore represents an AWS Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore",
                          properties: {
                            fsType: {
                              description:
                                'Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore TODO: how do we prevent errors in the filesystem from compromising the machine',
                              type: "string",
                            },
                            partition: {
                              description:
                                'The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty).',
                              format: "int32",
                              type: "integer",
                            },
                            readOnly: {
                              description:
                                'Specify "true" to force and set the ReadOnly property in VolumeMounts to "true". If omitted, the default is "false". More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore',
                              type: "boolean",
                            },
                            volumeID: {
                              description:
                                "Unique ID of the persistent disk resource in AWS (Amazon EBS volume). More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore",
                              type: "string",
                            },
                          },
                          required: ["volumeID"],
                          type: "object",
                        },
                        azureDisk: {
                          description:
                            "AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.",
                          properties: {
                            cachingMode: {
                              description:
                                "Host Caching mode: None, Read Only, Read Write.",
                              type: "string",
                            },
                            diskName: {
                              description:
                                "The Name of the data disk in the blob storage",
                              type: "string",
                            },
                            diskURI: {
                              description:
                                "The URI the data disk in the blob storage",
                              type: "string",
                            },
                            fsType: {
                              description:
                                'Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.',
                              type: "string",
                            },
                            kind: {
                              description:
                                "Expected values Shared: multiple blob disks per storage account  Dedicated: single blob disk per storage account  Managed: azure managed data disk (only in managed availability set). defaults to shared",
                              type: "string",
                            },
                            readOnly: {
                              description:
                                "Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.",
                              type: "boolean",
                            },
                          },
                          required: ["diskName", "diskURI"],
                          type: "object",
                        },
                        azureFile: {
                          description:
                            "AzureFile represents an Azure File Service mount on the host and bind mount to the pod.",
                          properties: {
                            readOnly: {
                              description:
                                "Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.",
                              type: "boolean",
                            },
                            secretName: {
                              description:
                                "the name of secret that contains Azure Storage Account Name and Key",
                              type: "string",
                            },
                            shareName: {
                              description: "Share Name",
                              type: "string",
                            },
                          },
                          required: ["secretName", "shareName"],
                          type: "object",
                        },
                        cephfs: {
                          description:
                            "CephFS represents a Ceph FS mount on the host that shares a pod's lifetime",
                          properties: {
                            monitors: {
                              description:
                                "Required: Monitors is a collection of Ceph monitors More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it",
                              items: {
                                type: "string",
                              },
                              type: "array",
                            },
                            path: {
                              description:
                                "Optional: Used as the mounted root, rather than the full Ceph tree, default is /",
                              type: "string",
                            },
                            readOnly: {
                              description:
                                "Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it",
                              type: "boolean",
                            },
                            secretFile: {
                              description:
                                "Optional: SecretFile is the path to key ring for User, default is /etc/ceph/user.secret More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it",
                              type: "string",
                            },
                            secretRef: {
                              description:
                                "Optional: SecretRef is reference to the authentication secret for User, default is empty. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it",
                              properties: {
                                name: {
                                  description:
                                    "Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?",
                                  type: "string",
                                },
                              },
                              type: "object",
                            },
                            user: {
                              description:
                                "Optional: User is the rados user name, default is admin More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it",
                              type: "string",
                            },
                          },
                          required: ["monitors"],
                          type: "object",
                        },
                        cinder: {
                          description:
                            "Cinder represents a cinder volume attached and mounted on kubelets host machine. More info: https://examples.k8s.io/mysql-cinder-pd/README.md",
                          properties: {
                            fsType: {
                              description:
                                'Filesystem type to mount. Must be a filesystem type supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://examples.k8s.io/mysql-cinder-pd/README.md',
                              type: "string",
                            },
                            readOnly: {
                              description:
                                "Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/mysql-cinder-pd/README.md",
                              type: "boolean",
                            },
                            secretRef: {
                              description:
                                "Optional: points to a secret object containing parameters used to connect to OpenStack.",
                              properties: {
                                name: {
                                  description:
                                    "Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?",
                                  type: "string",
                                },
                              },
                              type: "object",
                            },
                            volumeID: {
                              description:
                                "volume id used to identify the volume in cinder. More info: https://examples.k8s.io/mysql-cinder-pd/README.md",
                              type: "string",
                            },
                          },
                          required: ["volumeID"],
                          type: "object",
                        },
                        configMap: {
                          description:
                            "ConfigMap represents a configMap that should populate this volume",
                          properties: {
                            defaultMode: {
                              description:
                                "Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.",
                              format: "int32",
                              type: "integer",
                            },
                            items: {
                              description:
                                "If unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.",
                              items: {
                                description:
                                  "Maps a string key to a path within a volume.",
                                properties: {
                                  key: {
                                    description: "The key to project.",
                                    type: "string",
                                  },
                                  mode: {
                                    description:
                                      "Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.",
                                    format: "int32",
                                    type: "integer",
                                  },
                                  path: {
                                    description:
                                      "The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.",
                                    type: "string",
                                  },
                                },
                                required: ["key", "path"],
                                type: "object",
                              },
                              type: "array",
                            },
                            name: {
                              description:
                                "Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?",
                              type: "string",
                            },
                            optional: {
                              description:
                                "Specify whether the ConfigMap or its keys must be defined",
                              type: "boolean",
                            },
                          },
                          type: "object",
                        },
                        csi: {
                          description:
                            "CSI (Container Storage Interface) represents storage that is handled by an external CSI driver (Alpha feature).",
                          properties: {
                            driver: {
                              description:
                                "Driver is the name of the CSI driver that handles this volume. Consult with your admin for the correct name as registered in the cluster.",
                              type: "string",
                            },
                            fsType: {
                              description:
                                'Filesystem type to mount. Ex. "ext4", "xfs", "ntfs". If not provided, the empty value is passed to the associated CSI driver which will determine the default filesystem to apply.',
                              type: "string",
                            },
                            nodePublishSecretRef: {
                              description:
                                "NodePublishSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI NodePublishVolume and NodeUnpublishVolume calls. This field is optional, and  may be empty if no secret is required. If the secret object contains more than one secret, all secret references are passed.",
                              properties: {
                                name: {
                                  description:
                                    "Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?",
                                  type: "string",
                                },
                              },
                              type: "object",
                            },
                            readOnly: {
                              description:
                                "Specifies a read-only configuration for the volume. Defaults to false (read/write).",
                              type: "boolean",
                            },
                            volumeAttributes: {
                              additionalProperties: {
                                type: "string",
                              },
                              description:
                                "VolumeAttributes stores driver-specific properties that are passed to the CSI driver. Consult your driver's documentation for supported values.",
                              type: "object",
                            },
                          },
                          required: ["driver"],
                          type: "object",
                        },
                        downwardAPI: {
                          description:
                            "DownwardAPI represents downward API about the pod that should populate this volume",
                          properties: {
                            defaultMode: {
                              description:
                                "Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.",
                              format: "int32",
                              type: "integer",
                            },
                            items: {
                              description:
                                "Items is a list of downward API volume file",
                              items: {
                                description:
                                  "DownwardAPIVolumeFile represents information to create the file containing the pod field",
                                properties: {
                                  fieldRef: {
                                    description:
                                      "Required: Selects a field of the pod: only annotations, labels, name and namespace are supported.",
                                    properties: {
                                      apiVersion: {
                                        description:
                                          'Version of the schema the FieldPath is written in terms of, defaults to "v1".',
                                        type: "string",
                                      },
                                      fieldPath: {
                                        description:
                                          "Path of the field to select in the specified API version.",
                                        type: "string",
                                      },
                                    },
                                    required: ["fieldPath"],
                                    type: "object",
                                  },
                                  mode: {
                                    description:
                                      "Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.",
                                    format: "int32",
                                    type: "integer",
                                  },
                                  path: {
                                    description:
                                      "Required: Path is  the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'",
                                    type: "string",
                                  },
                                  resourceFieldRef: {
                                    description:
                                      "Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported.",
                                    properties: {
                                      containerName: {
                                        description:
                                          "Container name: required for volumes, optional for env vars",
                                        type: "string",
                                      },
                                      divisor: {
                                        description:
                                          'Specifies the output format of the exposed resources, defaults to "1"',
                                        type: "string",
                                      },
                                      resource: {
                                        description:
                                          "Required: resource to select",
                                        type: "string",
                                      },
                                    },
                                    required: ["resource"],
                                    type: "object",
                                  },
                                },
                                required: ["path"],
                                type: "object",
                              },
                              type: "array",
                            },
                          },
                          type: "object",
                        },
                        emptyDir: {
                          description:
                            "EmptyDir represents a temporary directory that shares a pod's lifetime. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir",
                          properties: {
                            medium: {
                              description:
                                'What type of storage medium should back this directory. The default is "" which means to use the node\'s default medium. Must be an empty string (default) or Memory. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir',
                              type: "string",
                            },
                            sizeLimit: {
                              description:
                                "Total amount of local storage required for this EmptyDir volume. The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers in a pod. The default is nil which means that the limit is undefined. More info: http://kubernetes.io/docs/user-guide/volumes#emptydir",
                              type: "string",
                            },
                          },
                          type: "object",
                        },
                        fc: {
                          description:
                            "FC represents a Fibre Channel resource that is attached to a kubelet's host machine and then exposed to the pod.",
                          properties: {
                            fsType: {
                              description:
                                'Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. TODO: how do we prevent errors in the filesystem from compromising the machine',
                              type: "string",
                            },
                            lun: {
                              description: "Optional: FC target lun number",
                              format: "int32",
                              type: "integer",
                            },
                            readOnly: {
                              description:
                                "Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.",
                              type: "boolean",
                            },
                            targetWWNs: {
                              description:
                                "Optional: FC target worldwide names (WWNs)",
                              items: {
                                type: "string",
                              },
                              type: "array",
                            },
                            wwids: {
                              description:
                                "Optional: FC volume world wide identifiers (wwids) Either wwids or combination of targetWWNs and lun must be set, but not both simultaneously.",
                              items: {
                                type: "string",
                              },
                              type: "array",
                            },
                          },
                          type: "object",
                        },
                        flexVolume: {
                          description:
                            "FlexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.",
                          properties: {
                            driver: {
                              description:
                                "Driver is the name of the driver to use for this volume.",
                              type: "string",
                            },
                            fsType: {
                              description:
                                'Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". The default filesystem depends on FlexVolume script.',
                              type: "string",
                            },
                            options: {
                              additionalProperties: {
                                type: "string",
                              },
                              description:
                                "Optional: Extra command options if any.",
                              type: "object",
                            },
                            readOnly: {
                              description:
                                "Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.",
                              type: "boolean",
                            },
                            secretRef: {
                              description:
                                "Optional: SecretRef is reference to the secret object containing sensitive information to pass to the plugin scripts. This may be empty if no secret object is specified. If the secret object contains more than one secret, all secrets are passed to the plugin scripts.",
                              properties: {
                                name: {
                                  description:
                                    "Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?",
                                  type: "string",
                                },
                              },
                              type: "object",
                            },
                          },
                          required: ["driver"],
                          type: "object",
                        },
                        flocker: {
                          description:
                            "Flocker represents a Flocker volume attached to a kubelet's host machine. This depends on the Flocker control service being running",
                          properties: {
                            datasetName: {
                              description:
                                "Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated",
                              type: "string",
                            },
                            datasetUUID: {
                              description:
                                "UUID of the dataset. This is unique identifier of a Flocker dataset",
                              type: "string",
                            },
                          },
                          type: "object",
                        },
                        gcePersistentDisk: {
                          description:
                            "GCEPersistentDisk represents a GCE Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk",
                          properties: {
                            fsType: {
                              description:
                                'Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk TODO: how do we prevent errors in the filesystem from compromising the machine',
                              type: "string",
                            },
                            partition: {
                              description:
                                'The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty). More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk',
                              format: "int32",
                              type: "integer",
                            },
                            pdName: {
                              description:
                                "Unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk",
                              type: "string",
                            },
                            readOnly: {
                              description:
                                "ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk",
                              type: "boolean",
                            },
                          },
                          required: ["pdName"],
                          type: "object",
                        },
                        gitRepo: {
                          description:
                            "GitRepo represents a git repository at a particular revision. DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container.",
                          properties: {
                            directory: {
                              description:
                                "Target directory name. Must not contain or start with '..'.  If '.' is supplied, the volume directory will be the git repository.  Otherwise, if specified, the volume will contain the git repository in the subdirectory with the given name.",
                              type: "string",
                            },
                            repository: {
                              description: "Repository URL",
                              type: "string",
                            },
                            revision: {
                              description:
                                "Commit hash for the specified revision.",
                              type: "string",
                            },
                          },
                          required: ["repository"],
                          type: "object",
                        },
                        glusterfs: {
                          description:
                            "Glusterfs represents a Glusterfs mount on the host that shares a pod's lifetime. More info: https://examples.k8s.io/volumes/glusterfs/README.md",
                          properties: {
                            endpoints: {
                              description:
                                "EndpointsName is the endpoint name that details Glusterfs topology. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod",
                              type: "string",
                            },
                            path: {
                              description:
                                "Path is the Glusterfs volume path. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod",
                              type: "string",
                            },
                            readOnly: {
                              description:
                                "ReadOnly here will force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod",
                              type: "boolean",
                            },
                          },
                          required: ["endpoints", "path"],
                          type: "object",
                        },
                        hostPath: {
                          description:
                            "HostPath represents a pre-existing file or directory on the host machine that is directly exposed to the container. This is generally used for system agents or other privileged things that are allowed to see the host machine. Most containers will NOT need this. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath --- TODO(jonesdl) We need to restrict who can use host directory mounts and who can/can not mount host directories as read/write.",
                          properties: {
                            path: {
                              description:
                                "Path of the directory on the host. If the path is a symlink, it will follow the link to the real path. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath",
                              type: "string",
                            },
                            type: {
                              description:
                                'Type for HostPath Volume Defaults to "" More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath',
                              type: "string",
                            },
                          },
                          required: ["path"],
                          type: "object",
                        },
                        iscsi: {
                          description:
                            "ISCSI represents an ISCSI Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://examples.k8s.io/volumes/iscsi/README.md",
                          properties: {
                            chapAuthDiscovery: {
                              description:
                                "whether support iSCSI Discovery CHAP authentication",
                              type: "boolean",
                            },
                            chapAuthSession: {
                              description:
                                "whether support iSCSI Session CHAP authentication",
                              type: "boolean",
                            },
                            fsType: {
                              description:
                                'Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#iscsi TODO: how do we prevent errors in the filesystem from compromising the machine',
                              type: "string",
                            },
                            initiatorName: {
                              description:
                                "Custom iSCSI Initiator Name. If initiatorName is specified with iscsiInterface simultaneously, new iSCSI interface <target portal>:<volume name> will be created for the connection.",
                              type: "string",
                            },
                            iqn: {
                              description: "Target iSCSI Qualified Name.",
                              type: "string",
                            },
                            iscsiInterface: {
                              description:
                                "iSCSI Interface Name that uses an iSCSI transport. Defaults to 'default' (tcp).",
                              type: "string",
                            },
                            lun: {
                              description: "iSCSI Target Lun number.",
                              format: "int32",
                              type: "integer",
                            },
                            portals: {
                              description:
                                "iSCSI Target Portal List. The portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).",
                              items: {
                                type: "string",
                              },
                              type: "array",
                            },
                            readOnly: {
                              description:
                                "ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false.",
                              type: "boolean",
                            },
                            secretRef: {
                              description:
                                "CHAP Secret for iSCSI target and initiator authentication",
                              properties: {
                                name: {
                                  description:
                                    "Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?",
                                  type: "string",
                                },
                              },
                              type: "object",
                            },
                            targetPortal: {
                              description:
                                "iSCSI Target Portal. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).",
                              type: "string",
                            },
                          },
                          required: ["iqn", "lun", "targetPortal"],
                          type: "object",
                        },
                        mountPath: {
                          type: "string",
                        },
                        nfs: {
                          description:
                            "NFS represents an NFS mount on the host that shares a pod's lifetime More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs",
                          properties: {
                            path: {
                              description:
                                "Path that is exported by the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs",
                              type: "string",
                            },
                            readOnly: {
                              description:
                                "ReadOnly here will force the NFS export to be mounted with read-only permissions. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs",
                              type: "boolean",
                            },
                            server: {
                              description:
                                "Server is the hostname or IP address of the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs",
                              type: "string",
                            },
                          },
                          required: ["path", "server"],
                          type: "object",
                        },
                        persistentVolumeClaim: {
                          description:
                            "PersistentVolumeClaimVolumeSource represents a reference to a PersistentVolumeClaim in the same namespace. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims",
                          properties: {
                            claimName: {
                              description:
                                "ClaimName is the name of a PersistentVolumeClaim in the same namespace as the pod using this volume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims",
                              type: "string",
                            },
                            readOnly: {
                              description:
                                "Will force the ReadOnly setting in VolumeMounts. Default false.",
                              type: "boolean",
                            },
                          },
                          required: ["claimName"],
                          type: "object",
                        },
                        photonPersistentDisk: {
                          description:
                            "PhotonPersistentDisk represents a PhotonController persistent disk attached and mounted on kubelets host machine",
                          properties: {
                            fsType: {
                              description:
                                'Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.',
                              type: "string",
                            },
                            pdID: {
                              description:
                                "ID that identifies Photon Controller persistent disk",
                              type: "string",
                            },
                          },
                          required: ["pdID"],
                          type: "object",
                        },
                        portworxVolume: {
                          description:
                            "PortworxVolume represents a portworx volume attached and mounted on kubelets host machine",
                          properties: {
                            fsType: {
                              description:
                                'FSType represents the filesystem type to mount Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs". Implicitly inferred to be "ext4" if unspecified.',
                              type: "string",
                            },
                            readOnly: {
                              description:
                                "Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.",
                              type: "boolean",
                            },
                            volumeID: {
                              description:
                                "VolumeID uniquely identifies a Portworx volume",
                              type: "string",
                            },
                          },
                          required: ["volumeID"],
                          type: "object",
                        },
                        projected: {
                          description:
                            "Items for all in one resources secrets, configmaps, and downward API",
                          properties: {
                            defaultMode: {
                              description:
                                "Mode bits to use on created files by default. Must be a value between 0 and 0777. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.",
                              format: "int32",
                              type: "integer",
                            },
                            sources: {
                              description: "list of volume projections",
                              items: {
                                description:
                                  "Projection that may be projected along with other supported volume types",
                                properties: {
                                  configMap: {
                                    description:
                                      "information about the configMap data to project",
                                    properties: {
                                      items: {
                                        description:
                                          "If unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.",
                                        items: {
                                          description:
                                            "Maps a string key to a path within a volume.",
                                          properties: {
                                            key: {
                                              description:
                                                "The key to project.",
                                              type: "string",
                                            },
                                            mode: {
                                              description:
                                                "Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.",
                                              format: "int32",
                                              type: "integer",
                                            },
                                            path: {
                                              description:
                                                "The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.",
                                              type: "string",
                                            },
                                          },
                                          required: ["key", "path"],
                                          type: "object",
                                        },
                                        type: "array",
                                      },
                                      name: {
                                        description:
                                          "Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?",
                                        type: "string",
                                      },
                                      optional: {
                                        description:
                                          "Specify whether the ConfigMap or its keys must be defined",
                                        type: "boolean",
                                      },
                                    },
                                    type: "object",
                                  },
                                  downwardAPI: {
                                    description:
                                      "information about the downwardAPI data to project",
                                    properties: {
                                      items: {
                                        description:
                                          "Items is a list of DownwardAPIVolume file",
                                        items: {
                                          description:
                                            "DownwardAPIVolumeFile represents information to create the file containing the pod field",
                                          properties: {
                                            fieldRef: {
                                              description:
                                                "Required: Selects a field of the pod: only annotations, labels, name and namespace are supported.",
                                              properties: {
                                                apiVersion: {
                                                  description:
                                                    'Version of the schema the FieldPath is written in terms of, defaults to "v1".',
                                                  type: "string",
                                                },
                                                fieldPath: {
                                                  description:
                                                    "Path of the field to select in the specified API version.",
                                                  type: "string",
                                                },
                                              },
                                              required: ["fieldPath"],
                                              type: "object",
                                            },
                                            mode: {
                                              description:
                                                "Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.",
                                              format: "int32",
                                              type: "integer",
                                            },
                                            path: {
                                              description:
                                                "Required: Path is  the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'",
                                              type: "string",
                                            },
                                            resourceFieldRef: {
                                              description:
                                                "Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported.",
                                              properties: {
                                                containerName: {
                                                  description:
                                                    "Container name: required for volumes, optional for env vars",
                                                  type: "string",
                                                },
                                                divisor: {
                                                  description:
                                                    'Specifies the output format of the exposed resources, defaults to "1"',
                                                  type: "string",
                                                },
                                                resource: {
                                                  description:
                                                    "Required: resource to select",
                                                  type: "string",
                                                },
                                              },
                                              required: ["resource"],
                                              type: "object",
                                            },
                                          },
                                          required: ["path"],
                                          type: "object",
                                        },
                                        type: "array",
                                      },
                                    },
                                    type: "object",
                                  },
                                  secret: {
                                    description:
                                      "information about the secret data to project",
                                    properties: {
                                      items: {
                                        description:
                                          "If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.",
                                        items: {
                                          description:
                                            "Maps a string key to a path within a volume.",
                                          properties: {
                                            key: {
                                              description:
                                                "The key to project.",
                                              type: "string",
                                            },
                                            mode: {
                                              description:
                                                "Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.",
                                              format: "int32",
                                              type: "integer",
                                            },
                                            path: {
                                              description:
                                                "The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.",
                                              type: "string",
                                            },
                                          },
                                          required: ["key", "path"],
                                          type: "object",
                                        },
                                        type: "array",
                                      },
                                      name: {
                                        description:
                                          "Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?",
                                        type: "string",
                                      },
                                      optional: {
                                        description:
                                          "Specify whether the Secret or its key must be defined",
                                        type: "boolean",
                                      },
                                    },
                                    type: "object",
                                  },
                                  serviceAccountToken: {
                                    description:
                                      "information about the serviceAccountToken data to project",
                                    properties: {
                                      audience: {
                                        description:
                                          "Audience is the intended audience of the token. A recipient of a token must identify itself with an identifier specified in the audience of the token, and otherwise should reject the token. The audience defaults to the identifier of the apiserver.",
                                        type: "string",
                                      },
                                      expirationSeconds: {
                                        description:
                                          "ExpirationSeconds is the requested duration of validity of the service account token. As the token approaches expiration, the kubelet volume plugin will proactively rotate the service account token. The kubelet will start trying to rotate the token if the token is older than 80 percent of its time to live or if the token is older than 24 hours.Defaults to 1 hour and must be at least 10 minutes.",
                                        format: "int64",
                                        type: "integer",
                                      },
                                      path: {
                                        description:
                                          "Path is the path relative to the mount point of the file to project the token into.",
                                        type: "string",
                                      },
                                    },
                                    required: ["path"],
                                    type: "object",
                                  },
                                },
                                type: "object",
                              },
                              type: "array",
                            },
                          },
                          required: ["sources"],
                          type: "object",
                        },
                        quobyte: {
                          description:
                            "Quobyte represents a Quobyte mount on the host that shares a pod's lifetime",
                          properties: {
                            group: {
                              description:
                                "Group to map volume access to Default is no group",
                              type: "string",
                            },
                            readOnly: {
                              description:
                                "ReadOnly here will force the Quobyte volume to be mounted with read-only permissions. Defaults to false.",
                              type: "boolean",
                            },
                            registry: {
                              description:
                                "Registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes",
                              type: "string",
                            },
                            tenant: {
                              description:
                                "Tenant owning the given Quobyte volume in the Backend Used with dynamically provisioned Quobyte volumes, value is set by the plugin",
                              type: "string",
                            },
                            user: {
                              description:
                                "User to map volume access to Defaults to serivceaccount user",
                              type: "string",
                            },
                            volume: {
                              description:
                                "Volume is a string that references an already created Quobyte volume by name.",
                              type: "string",
                            },
                          },
                          required: ["registry", "volume"],
                          type: "object",
                        },
                        rbd: {
                          description:
                            "RBD represents a Rados Block Device mount on the host that shares a pod's lifetime. More info: https://examples.k8s.io/volumes/rbd/README.md",
                          properties: {
                            fsType: {
                              description:
                                'Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#rbd TODO: how do we prevent errors in the filesystem from compromising the machine',
                              type: "string",
                            },
                            image: {
                              description:
                                "The rados image name. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it",
                              type: "string",
                            },
                            keyring: {
                              description:
                                "Keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it",
                              type: "string",
                            },
                            monitors: {
                              description:
                                "A collection of Ceph monitors. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it",
                              items: {
                                type: "string",
                              },
                              type: "array",
                            },
                            pool: {
                              description:
                                "The rados pool name. Default is rbd. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it",
                              type: "string",
                            },
                            readOnly: {
                              description:
                                "ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it",
                              type: "boolean",
                            },
                            secretRef: {
                              description:
                                "SecretRef is name of the authentication secret for RBDUser. If provided overrides keyring. Default is nil. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it",
                              properties: {
                                name: {
                                  description:
                                    "Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?",
                                  type: "string",
                                },
                              },
                              type: "object",
                            },
                            user: {
                              description:
                                "The rados user name. Default is admin. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it",
                              type: "string",
                            },
                          },
                          required: ["image", "monitors"],
                          type: "object",
                        },
                        scaleIO: {
                          description:
                            "ScaleIO represents a ScaleIO persistent volume attached and mounted on Kubernetes nodes.",
                          properties: {
                            fsType: {
                              description:
                                'Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Default is "xfs".',
                              type: "string",
                            },
                            gateway: {
                              description:
                                "The host address of the ScaleIO API Gateway.",
                              type: "string",
                            },
                            protectionDomain: {
                              description:
                                "The name of the ScaleIO Protection Domain for the configured storage.",
                              type: "string",
                            },
                            readOnly: {
                              description:
                                "Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.",
                              type: "boolean",
                            },
                            secretRef: {
                              description:
                                "SecretRef references to the secret for ScaleIO user and other sensitive information. If this is not provided, Login operation will fail.",
                              properties: {
                                name: {
                                  description:
                                    "Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?",
                                  type: "string",
                                },
                              },
                              type: "object",
                            },
                            sslEnabled: {
                              description:
                                "Flag to enable/disable SSL communication with Gateway, default false",
                              type: "boolean",
                            },
                            storageMode: {
                              description:
                                "Indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned. Default is ThinProvisioned.",
                              type: "string",
                            },
                            storagePool: {
                              description:
                                "The ScaleIO Storage Pool associated with the protection domain.",
                              type: "string",
                            },
                            system: {
                              description:
                                "The name of the storage system as configured in ScaleIO.",
                              type: "string",
                            },
                            volumeName: {
                              description:
                                "The name of a volume already created in the ScaleIO system that is associated with this volume source.",
                              type: "string",
                            },
                          },
                          required: ["gateway", "secretRef", "system"],
                          type: "object",
                        },
                        secret: {
                          description:
                            "Secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret",
                          properties: {
                            defaultMode: {
                              description:
                                "Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.",
                              format: "int32",
                              type: "integer",
                            },
                            items: {
                              description:
                                "If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.",
                              items: {
                                description:
                                  "Maps a string key to a path within a volume.",
                                properties: {
                                  key: {
                                    description: "The key to project.",
                                    type: "string",
                                  },
                                  mode: {
                                    description:
                                      "Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.",
                                    format: "int32",
                                    type: "integer",
                                  },
                                  path: {
                                    description:
                                      "The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.",
                                    type: "string",
                                  },
                                },
                                required: ["key", "path"],
                                type: "object",
                              },
                              type: "array",
                            },
                            optional: {
                              description:
                                "Specify whether the Secret or its keys must be defined",
                              type: "boolean",
                            },
                            secretName: {
                              description:
                                "Name of the secret in the pod's namespace to use. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret",
                              type: "string",
                            },
                          },
                          type: "object",
                        },
                        storageos: {
                          description:
                            "StorageOS represents a StorageOS volume attached and mounted on Kubernetes nodes.",
                          properties: {
                            fsType: {
                              description:
                                'Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.',
                              type: "string",
                            },
                            readOnly: {
                              description:
                                "Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.",
                              type: "boolean",
                            },
                            secretRef: {
                              description:
                                "SecretRef specifies the secret to use for obtaining the StorageOS API credentials.  If not specified, default values will be attempted.",
                              properties: {
                                name: {
                                  description:
                                    "Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?",
                                  type: "string",
                                },
                              },
                              type: "object",
                            },
                            volumeName: {
                              description:
                                "VolumeName is the human-readable name of the StorageOS volume.  Volume names are only unique within a namespace.",
                              type: "string",
                            },
                            volumeNamespace: {
                              description:
                                'VolumeNamespace specifies the scope of the volume within StorageOS.  If no namespace is specified then the Pod\'s namespace will be used.  This allows the Kubernetes name scoping to be mirrored within StorageOS for tighter integration. Set VolumeName to any name to override the default behaviour. Set to "default" if you are not using namespaces within StorageOS. Namespaces that do not pre-exist within StorageOS will be created.',
                              type: "string",
                            },
                          },
                          type: "object",
                        },
                        subPath: {
                          type: "string",
                        },
                        vsphereVolume: {
                          description:
                            "VsphereVolume represents a vSphere volume attached and mounted on kubelets host machine",
                          properties: {
                            fsType: {
                              description:
                                'Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.',
                              type: "string",
                            },
                            storagePolicyID: {
                              description:
                                "Storage Policy Based Management (SPBM) profile ID associated with the StoragePolicyName.",
                              type: "string",
                            },
                            storagePolicyName: {
                              description:
                                "Storage Policy Based Management (SPBM) profile name.",
                              type: "string",
                            },
                            volumePath: {
                              description:
                                "Path that identifies vSphere volume vmdk",
                              type: "string",
                            },
                          },
                          required: ["volumePath"],
                          type: "object",
                        },
                      },
                      type: "object",
                    },
                    rest: {
                      properties: {
                        url: {
                          type: "string",
                        },
                      },
                      type: "object",
                    },
                    s3: {
                      properties: {
                        bucket: {
                          type: "string",
                        },
                        endpoint: {
                          type: "string",
                        },
                        prefix: {
                          type: "string",
                        },
                        region: {
                          type: "string",
                        },
                      },
                      type: "object",
                    },
                    swift: {
                      properties: {
                        container: {
                          type: "string",
                        },
                        prefix: {
                          type: "string",
                        },
                      },
                      type: "object",
                    },
                  },
                  type: "object",
                },
                create: {
                  type: "boolean",
                },
                name: {
                  type: "string",
                },
              },
              required: ["backend", "create"],
              type: "object",
            },
            resources: {
              description:
                "ResourceRequirements describes the compute resource requirements.",
              properties: {
                limits: {
                  additionalProperties: {
                    type: "string",
                  },
                  description:
                    "Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/",
                  type: "object",
                },
                requests: {
                  additionalProperties: {
                    type: "string",
                  },
                  description:
                    "Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/",
                  type: "object",
                },
              },
              type: "object",
            },
            retentionPolicy: {
              properties: {
                dryRun: {
                  type: "boolean",
                },
                keepDaily: {
                  format: "int64",
                  type: "integer",
                },
                keepHourly: {
                  format: "int64",
                  type: "integer",
                },
                keepLast: {
                  format: "int64",
                  type: "integer",
                },
                keepMonthly: {
                  format: "int64",
                  type: "integer",
                },
                keepTags: {
                  items: {
                    type: "string",
                  },
                  type: "array",
                },
                keepWeekly: {
                  format: "int64",
                  type: "integer",
                },
                keepYearly: {
                  format: "int64",
                  type: "integer",
                },
                name: {
                  type: "string",
                },
                prune: {
                  type: "boolean",
                },
              },
              required: ["name", "prune"],
              type: "object",
            },
            schedule: {
              type: "string",
            },
            secret: {
              properties: {
                annotations: {
                  additionalProperties: {
                    type: "string",
                  },
                  type: "object",
                },
                create: {
                  type: "boolean",
                },
                data: {
                  additionalProperties: {
                    type: "string",
                  },
                  type: "object",
                },
                name: {
                  type: "string",
                },
              },
              required: ["create"],
              type: "object",
            },
            securityContext: {
              description:
                "SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext.  When both are set, the values in SecurityContext take precedence.",
              properties: {
                allowPrivilegeEscalation: {
                  description:
                    "AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN",
                  type: "boolean",
                },
                capabilities: {
                  description:
                    "The capabilities to add/drop when running containers. Defaults to the default set of capabilities granted by the container runtime.",
                  properties: {
                    add: {
                      description: "Added capabilities",
                      items: {
                        description:
                          "Capability represent POSIX capabilities type",
                        type: "string",
                      },
                      type: "array",
                    },
                    drop: {
                      description: "Removed capabilities",
                      items: {
                        description:
                          "Capability represent POSIX capabilities type",
                        type: "string",
                      },
                      type: "array",
                    },
                  },
                  type: "object",
                },
                privileged: {
                  description:
                    "Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false.",
                  type: "boolean",
                },
                procMount: {
                  description:
                    "procMount denotes the type of proc mount to use for the containers. The default is DefaultProcMount which uses the container runtime defaults for readonly paths and masked paths. This requires the ProcMountType feature flag to be enabled.",
                  type: "string",
                },
                readOnlyRootFilesystem: {
                  description:
                    "Whether this container has a read-only root filesystem. Default is false.",
                  type: "boolean",
                },
                runAsGroup: {
                  description:
                    "The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.",
                  format: "int64",
                  type: "integer",
                },
                runAsNonRoot: {
                  description:
                    "Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.",
                  type: "boolean",
                },
                runAsUser: {
                  description:
                    "The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.",
                  format: "int64",
                  type: "integer",
                },
                seLinuxOptions: {
                  description:
                    "The SELinux context to be applied to the container. If unspecified, the container runtime will allocate a random SELinux context for each container.  May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.",
                  properties: {
                    level: {
                      description:
                        "Level is SELinux level label that applies to the container.",
                      type: "string",
                    },
                    role: {
                      description:
                        "Role is a SELinux role label that applies to the container.",
                      type: "string",
                    },
                    type: {
                      description:
                        "Type is a SELinux type label that applies to the container.",
                      type: "string",
                    },
                    user: {
                      description:
                        "User is a SELinux user label that applies to the container.",
                      type: "string",
                    },
                  },
                  type: "object",
                },
                windowsOptions: {
                  description:
                    "The Windows specific settings applied to all containers. If unspecified, the options from the PodSecurityContext will be used. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.",
                  properties: {
                    gmsaCredentialSpec: {
                      description:
                        "GMSACredentialSpec is where the GMSA admission webhook (https://github.com/kubernetes-sigs/windows-gmsa) inlines the contents of the GMSA credential spec named by the GMSACredentialSpecName field. This field is alpha-level and is only honored by servers that enable the WindowsGMSA feature flag.",
                      type: "string",
                    },
                    gmsaCredentialSpecName: {
                      description:
                        "GMSACredentialSpecName is the name of the GMSA credential spec to use. This field is alpha-level and is only honored by servers that enable the WindowsGMSA feature flag.",
                      type: "string",
                    },
                    runAsUserName: {
                      description:
                        "The UserName in Windows to run the entrypoint of the container process. Defaults to the user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. This field is alpha-level and it is only honored by servers that enable the WindowsRunAsUserName feature flag.",
                      type: "string",
                    },
                  },
                  type: "object",
                },
              },
              type: "object",
            },
          },
          required: [
            "backupInvoker",
            "repository",
            "retentionPolicy",
            "schedule",
            "secret",
          ],
          type: "object",
        },
        storageClass: {
          properties: {
            annotations: {
              additionalProperties: {
                type: "string",
              },
              type: "object",
            },
            create: {
              type: "boolean",
            },
            mountOptions: {
              items: {
                type: "string",
              },
              type: "array",
            },
            name: {
              type: "string",
            },
            parameters: {
              additionalProperties: {
                type: "string",
              },
              type: "object",
            },
            provisioner: {
              type: "string",
            },
          },
          required: ["create"],
          type: "object",
        },
        terminationPolicy: {
          type: "string",
        },
        tls: {
          properties: {
            certificate: {
              properties: {
                dnsNames: {
                  items: {
                    type: "string",
                  },
                  type: "array",
                },
                duration: {
                  type: "string",
                },
                ipAddresses: {
                  items: {
                    type: "string",
                  },
                  type: "array",
                },
                organization: {
                  items: {
                    type: "string",
                  },
                  type: "array",
                },
                renewBefore: {
                  type: "string",
                },
                uriSANs: {
                  items: {
                    type: "string",
                  },
                  type: "array",
                },
              },
              type: "object",
            },
            enabled: {
              type: "boolean",
            },
            issuer: {
              properties: {
                kind: {
                  type: "string",
                },
                name: {
                  type: "string",
                },
              },
              required: ["kind", "name"],
              type: "object",
            },
          },
          required: ["enabled"],
          type: "object",
        },
        tolerations: {
          items: {
            description:
              "The pod this Toleration is attached to tolerates any taint that matches the triple <key,value,effect> using the matching operator <operator>.",
            properties: {
              effect: {
                description:
                  "Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.",
                type: "string",
              },
              key: {
                description:
                  "Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.",
                type: "string",
              },
              operator: {
                description:
                  "Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.",
                type: "string",
              },
              tolerationSeconds: {
                description:
                  "TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.",
                format: "int64",
                type: "integer",
              },
              value: {
                description:
                  "Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.",
                type: "string",
              },
            },
            type: "object",
          },
          type: "array",
        },
        updateStrategy: {
          type: "string",
        },
        version: {
          type: "string",
        },
      },
      required: [
        "clusterAuthMode",
        "grafana",
        "init",
        "machine",
        "mode",
        "monitoring",
        "persistence",
        "service",
        "serviceAccount",
        "sslMode",
        "stash",
        "storageClass",
        "terminationPolicy",
        "tls",
        "updateStrategy",
        "version",
      ],
      type: "object",
    },
    model: {
      nameOverride: "",
      fullnameOverride: "",
      imagePullSecrets: [],
      serviceAccount: {
        create: true,
        name: null,
      },
      controllerAnnotations: {},
      podAnnotations: {},
      securityContext: {},
      service: {
        type: "ClusterIP",
        annotations: {},
        externalIPs: [],
        loadBalancerIP: "",
      },
      machine: "db.t1.micro",
      resources: {},
      nodeSelector: {},
      tolerations: [],
      affinity: {},
      version: "3.4.17",
      mode: "Sharded",
      replicaSet: {
        name: "rs0",
        replicas: 3,
      },
      shardTopology: {
        shard: {
          replicas: 3,
          shards: 3,
        },
        configServer: {
          replicas: 3,
        },
        mongos: {
          replicas: 2,
        },
      },
      clusterAuthMode: "keyFile",
      sslMode: "disabled",
      tls: {
        enabled: false,
        issuer: {
          kind: "",
          name: "",
        },
        certificate: {
          organization: [],
          duration: "",
          renewBefore: "",
          dnsNames: [],
          ipAddresses: [],
          uriSANs: [],
        },
      },
      keyFileSecretName: "",
      databaseSecretName: "",
      configSource: {
        configMapName: "",
        secretName: "",
      },
      terminationPolicy: "WipeOut",
      updateStrategy: "OnDelete",
      storageClass: {
        create: false,
        annotations: {},
        name: null,
        provisioner: null,
        parameters: {},
        mountOptions: [],
      },
      persistence: {
        type: "Durable",
        accessModes: ["ReadWriteOnce"],
        size: "10Gi",
      },
      init: {
        scriptSource: {
          scriptPath: "",
          volume: {},
        },
        stashRestoreSession: {
          name: "",
        },
      },
      stash: {
        schedule: "0 */8 * * *",
        retentionPolicy: {
          name: "keep-last-5",
          keepLast: 5,
          prune: true,
        },
        podSecurityContext: {},
        securityContext: {},
        resources: {},
        backupInvoker: {
          type: "BackupConfiguration",
          create: true,
          annotations: {},
          name: null,
        },
        repository: {
          create: true,
          annotations: {},
          name: null,
          backend: {
            s3: {
              bucket: "kubedb-demo",
              prefix: "/profiles",
            },
          },
        },
        secret: {
          create: true,
          annotations: {},
          name: null,
          data: {},
        },
      },
      monitoring: {
        enabled: false,
        agent: "prometheus.io",
        prometheus: {
          namespace: "",
        },
        serviceMonitor: {
          labels: {},
        },
      },
      grafana: {
        name: "grafana",
        dashboard: {
          create: false,
          annotations: {},
          name: null,
        },
      },
    },
  },
];
