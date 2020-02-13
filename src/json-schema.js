export default [
  {
    title: "Custom",
    schema: {
      properties: {
        keyValuePair: {
          additionalProperties: {
            type: "string"
          },
          type: "object"
        },
        positions: {
          type: "array",
          items: {
            type: "string"
          }
        },
        name: {
          type: "string"
        },
        age: {
          type: "number"
        },
        previousJobs: {
          type: "array",
          items: {
            type: "object",
            properties: {
              companyName: {
                type: "string"
              },
              position: {
                type: "string"
              },
              yearWorked: {
                type: "number"
              }
            },
            required: ["companyName", "position", "yearWorked"]
          }
        },
        demoObject: {
          type: "object",
          properties: {
            demoProperty1: {
              type: "string"
            },
            demoProperty2: {
              type: "string"
            },
            demoProperty3: {
              type: "string"
            }
          },
          required: ["demoProperty1", "demoProperty2"]
        }
      },
      required: ["name", "age", "previousJobs"],
      type: "object"
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
          yearWorked: 32
        }
      ]
    }
  },
  {
    title: "Stash",
    schema: {
      properties: {
        additionalPodSecurityPolicies: {
          items: {
            type: "string"
          },
          type: "array"
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
                                  type: "string"
                                },
                                operator: {
                                  description:
                                    "Represents a key's relationship\nto a set of values. Valid operators are\nIn, NotIn, Exists, DoesNotExist. Gt, and\nLt.",
                                  type: "string"
                                },
                                values: {
                                  description:
                                    "An array of string values.\nIf the operator is In or NotIn, the values\narray must be non-empty. If the operator\nis Exists or DoesNotExist, the values\narray must be empty. If the operator is\nGt or Lt, the values array must have a\nsingle element, which will be interpreted\nas an integer. This array is replaced\nduring a strategic merge patch.",
                                  items: {
                                    type: "string"
                                  },
                                  type: "array"
                                }
                              },
                              required: ["key", "operator"],
                              type: "object"
                            },
                            type: "array"
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
                                  type: "string"
                                },
                                operator: {
                                  description:
                                    "Represents a key's relationship\nto a set of values. Valid operators are\nIn, NotIn, Exists, DoesNotExist. Gt, and\nLt.",
                                  type: "string"
                                },
                                values: {
                                  description:
                                    "An array of string values.\nIf the operator is In or NotIn, the values\narray must be non-empty. If the operator\nis Exists or DoesNotExist, the values\narray must be empty. If the operator is\nGt or Lt, the values array must have a\nsingle element, which will be interpreted\nas an integer. This array is replaced\nduring a strategic merge patch.",
                                  items: {
                                    type: "string"
                                  },
                                  type: "array"
                                }
                              },
                              required: ["key", "operator"],
                              type: "object"
                            },
                            type: "array"
                          }
                        },
                        type: "object"
                      },
                      weight: {
                        description:
                          "Weight associated with matching the corresponding\nnodeSelectorTerm, in the range 1-100.",
                        format: "int32",
                        type: "integer"
                      }
                    },
                    required: ["preference", "weight"],
                    type: "object"
                  },
                  type: "array"
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
                                  type: "string"
                                },
                                operator: {
                                  description:
                                    "Represents a key's relationship\nto a set of values. Valid operators are\nIn, NotIn, Exists, DoesNotExist. Gt, and\nLt.",
                                  type: "string"
                                },
                                values: {
                                  description:
                                    "An array of string values.\nIf the operator is In or NotIn, the values\narray must be non-empty. If the operator\nis Exists or DoesNotExist, the values\narray must be empty. If the operator is\nGt or Lt, the values array must have a\nsingle element, which will be interpreted\nas an integer. This array is replaced\nduring a strategic merge patch.",
                                  items: {
                                    type: "string"
                                  },
                                  type: "array"
                                }
                              },
                              required: ["key", "operator"],
                              type: "object"
                            },
                            type: "array"
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
                                  type: "string"
                                },
                                operator: {
                                  description:
                                    "Represents a key's relationship\nto a set of values. Valid operators are\nIn, NotIn, Exists, DoesNotExist. Gt, and\nLt.",
                                  type: "string"
                                },
                                values: {
                                  description:
                                    "An array of string values.\nIf the operator is In or NotIn, the values\narray must be non-empty. If the operator\nis Exists or DoesNotExist, the values\narray must be empty. If the operator is\nGt or Lt, the values array must have a\nsingle element, which will be interpreted\nas an integer. This array is replaced\nduring a strategic merge patch.",
                                  items: {
                                    type: "string"
                                  },
                                  type: "array"
                                }
                              },
                              required: ["key", "operator"],
                              type: "object"
                            },
                            type: "array"
                          }
                        },
                        type: "object"
                      },
                      type: "array"
                    }
                  },
                  required: ["nodeSelectorTerms"],
                  type: "object"
                }
              },
              type: "object"
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
                                      type: "string"
                                    },
                                    operator: {
                                      description:
                                        "operator represents a key's\nrelationship to a set of values. Valid\noperators are In, NotIn, Exists and\nDoesNotExist.",
                                      type: "string"
                                    },
                                    values: {
                                      description:
                                        "values is an array of string\nvalues. If the operator is In or NotIn,\nthe values array must be non-empty.\nIf the operator is Exists or DoesNotExist,\nthe values array must be empty. This\narray is replaced during a strategic\nmerge patch.",
                                      items: {
                                        type: "string"
                                      },
                                      type: "array"
                                    }
                                  },
                                  required: ["key", "operator"],
                                  type: "object"
                                },
                                type: "array"
                              },
                              matchLabels: {
                                additionalProperties: {
                                  type: "string"
                                },
                                description:
                                  'matchLabels is a map of {key,value}\npairs. A single {key,value} in the matchLabels\nmap is equivalent to an element of matchExpressions,\nwhose key field is "key", the operator is\n"In", and the values array contains only\n"value". The requirements are ANDed.',
                                type: "object"
                              }
                            },
                            type: "object"
                          },
                          namespaces: {
                            description:
                              'namespaces specifies which namespaces\nthe labelSelector applies to (matches against);\nnull or empty list means "this pod\'s namespace"',
                            items: {
                              type: "string"
                            },
                            type: "array"
                          },
                          topologyKey: {
                            description:
                              "This pod should be co-located (affinity)\nor not co-located (anti-affinity) with the pods\nmatching the labelSelector in the specified\nnamespaces, where co-located is defined as running\non a node whose value of the label with key\ntopologyKey matches that of any node on which\nany of the selected pods is running. Empty topologyKey\nis not allowed.",
                            type: "string"
                          }
                        },
                        required: ["topologyKey"],
                        type: "object"
                      },
                      weight: {
                        description:
                          "weight associated with matching the corresponding\npodAffinityTerm, in the range 1-100.",
                        format: "int32",
                        type: "integer"
                      }
                    },
                    required: ["podAffinityTerm", "weight"],
                    type: "object"
                  },
                  type: "array"
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
                                  type: "string"
                                },
                                operator: {
                                  description:
                                    "operator represents a key's\nrelationship to a set of values. Valid\noperators are In, NotIn, Exists and DoesNotExist.",
                                  type: "string"
                                },
                                values: {
                                  description:
                                    "values is an array of string\nvalues. If the operator is In or NotIn,\nthe values array must be non-empty. If\nthe operator is Exists or DoesNotExist,\nthe values array must be empty. This array\nis replaced during a strategic merge patch.",
                                  items: {
                                    type: "string"
                                  },
                                  type: "array"
                                }
                              },
                              required: ["key", "operator"],
                              type: "object"
                            },
                            type: "array"
                          },
                          matchLabels: {
                            additionalProperties: {
                              type: "string"
                            },
                            description:
                              'matchLabels is a map of {key,value}\npairs. A single {key,value} in the matchLabels\nmap is equivalent to an element of matchExpressions,\nwhose key field is "key", the operator is "In",\nand the values array contains only "value".\nThe requirements are ANDed.',
                            type: "object"
                          }
                        },
                        type: "object"
                      },
                      namespaces: {
                        description:
                          'namespaces specifies which namespaces\nthe labelSelector applies to (matches against);\nnull or empty list means "this pod\'s namespace"',
                        items: {
                          type: "string"
                        },
                        type: "array"
                      },
                      topologyKey: {
                        description:
                          "This pod should be co-located (affinity)\nor not co-located (anti-affinity) with the pods\nmatching the labelSelector in the specified namespaces,\nwhere co-located is defined as running on a node\nwhose value of the label with key topologyKey matches\nthat of any node on which any of the selected pods\nis running. Empty topologyKey is not allowed.",
                        type: "string"
                      }
                    },
                    required: ["topologyKey"],
                    type: "object"
                  },
                  type: "array"
                }
              },
              type: "object"
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
                                      type: "string"
                                    },
                                    operator: {
                                      description:
                                        "operator represents a key's\nrelationship to a set of values. Valid\noperators are In, NotIn, Exists and\nDoesNotExist.",
                                      type: "string"
                                    },
                                    values: {
                                      description:
                                        "values is an array of string\nvalues. If the operator is In or NotIn,\nthe values array must be non-empty.\nIf the operator is Exists or DoesNotExist,\nthe values array must be empty. This\narray is replaced during a strategic\nmerge patch.",
                                      items: {
                                        type: "string"
                                      },
                                      type: "array"
                                    }
                                  },
                                  required: ["key", "operator"],
                                  type: "object"
                                },
                                type: "array"
                              },
                              matchLabels: {
                                additionalProperties: {
                                  type: "string"
                                },
                                description:
                                  'matchLabels is a map of {key,value}\npairs. A single {key,value} in the matchLabels\nmap is equivalent to an element of matchExpressions,\nwhose key field is "key", the operator is\n"In", and the values array contains only\n"value". The requirements are ANDed.',
                                type: "object"
                              }
                            },
                            type: "object"
                          },
                          namespaces: {
                            description:
                              'namespaces specifies which namespaces\nthe labelSelector applies to (matches against);\nnull or empty list means "this pod\'s namespace"',
                            items: {
                              type: "string"
                            },
                            type: "array"
                          },
                          topologyKey: {
                            description:
                              "This pod should be co-located (affinity)\nor not co-located (anti-affinity) with the pods\nmatching the labelSelector in the specified\nnamespaces, where co-located is defined as running\non a node whose value of the label with key\ntopologyKey matches that of any node on which\nany of the selected pods is running. Empty topologyKey\nis not allowed.",
                            type: "string"
                          }
                        },
                        required: ["topologyKey"],
                        type: "object"
                      },
                      weight: {
                        description:
                          "weight associated with matching the corresponding\npodAffinityTerm, in the range 1-100.",
                        format: "int32",
                        type: "integer"
                      }
                    },
                    required: ["podAffinityTerm", "weight"],
                    type: "object"
                  },
                  type: "array"
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
                                  type: "string"
                                },
                                operator: {
                                  description:
                                    "operator represents a key's\nrelationship to a set of values. Valid\noperators are In, NotIn, Exists and DoesNotExist.",
                                  type: "string"
                                },
                                values: {
                                  description:
                                    "values is an array of string\nvalues. If the operator is In or NotIn,\nthe values array must be non-empty. If\nthe operator is Exists or DoesNotExist,\nthe values array must be empty. This array\nis replaced during a strategic merge patch.",
                                  items: {
                                    type: "string"
                                  },
                                  type: "array"
                                }
                              },
                              required: ["key", "operator"],
                              type: "object"
                            },
                            type: "array"
                          },
                          matchLabels: {
                            additionalProperties: {
                              type: "string"
                            },
                            description:
                              'matchLabels is a map of {key,value}\npairs. A single {key,value} in the matchLabels\nmap is equivalent to an element of matchExpressions,\nwhose key field is "key", the operator is "In",\nand the values array contains only "value".\nThe requirements are ANDed.',
                            type: "object"
                          }
                        },
                        type: "object"
                      },
                      namespaces: {
                        description:
                          'namespaces specifies which namespaces\nthe labelSelector applies to (matches against);\nnull or empty list means "this pod\'s namespace"',
                        items: {
                          type: "string"
                        },
                        type: "array"
                      },
                      topologyKey: {
                        description:
                          "This pod should be co-located (affinity)\nor not co-located (anti-affinity) with the pods\nmatching the labelSelector in the specified namespaces,\nwhere co-located is defined as running on a node\nwhose value of the label with key topologyKey matches\nthat of any node on which any of the selected pods\nis running. Empty topologyKey is not allowed.",
                        type: "string"
                      }
                    },
                    required: ["topologyKey"],
                    type: "object"
                  },
                  type: "array"
                }
              },
              type: "object"
            }
          },
          type: "object"
        },
        annotations: {
          additionalProperties: {
            type: "string"
          },
          type: "object"
        },
        apiserver: {
          properties: {
            bypassValidatingWebhookXray: {
              type: "boolean"
            },
            ca: {
              type: "string"
            },
            enableMutatingWebhook: {
              type: "boolean"
            },
            enableValidatingWebhook: {
              type: "boolean"
            },
            groupPriorityMinimum: {
              type: "integer"
            },
            healthcheck: {
              properties: {
                enabled: {
                  type: "boolean"
                }
              },
              required: ["enabled"],
              type: "object"
            },
            useKubeapiserverFqdnForAks: {
              type: "boolean"
            },
            versionPriority: {
              type: "integer"
            }
          },
          required: [
            "bypassValidatingWebhookXray",
            "ca",
            "enableMutatingWebhook",
            "enableValidatingWebhook",
            "groupPriorityMinimum",
            "healthcheck",
            "useKubeapiserverFqdnForAks",
            "versionPriority"
          ],
          type: "object"
        },
        cleaner: {
          properties: {
            registry: {
              type: "string"
            },
            repository: {
              type: "string"
            },
            tag: {
              type: "string"
            }
          },
          required: ["registry", "repository", "tag"],
          type: "object"
        },
        criticalAddon: {
          type: "boolean"
        },
        enableAnalytics: {
          type: "boolean"
        },
        imagePullPolicy: {
          type: "string"
        },
        logLevel: {
          type: "integer"
        },
        monitoring: {
          properties: {
            agent: {
              type: "string"
            },
            backup: {
              type: "boolean"
            },
            operator: {
              type: "boolean"
            },
            prometheus: {
              properties: {
                namespace: {
                  type: "string"
                }
              },
              required: ["namespace"],
              type: "object"
            },
            serviceMonitor: {
              properties: {
                labels: {
                  additionalProperties: {
                    type: "string"
                  },
                  type: "object"
                }
              },
              required: ["labels"],
              type: "object"
            }
          },
          required: [
            "agent",
            "backup",
            "operator",
            "prometheus",
            "serviceMonitor"
          ],
          type: "object"
        },
        nodeSelector: {
          additionalProperties: {
            type: "string"
          },
          type: "object"
        },
        operator: {
          properties: {
            registry: {
              type: "string"
            },
            repository: {
              type: "string"
            },
            tag: {
              type: "string"
            }
          },
          required: ["registry", "repository", "tag"],
          type: "object"
        },
        platform: {
          properties: {
            openshift: {
              type: "boolean"
            }
          },
          required: ["openshift"],
          type: "object"
        },
        pushgateway: {
          properties: {
            registry: {
              type: "string"
            },
            repository: {
              type: "string"
            },
            tag: {
              type: "string"
            }
          },
          required: ["registry", "repository", "tag"],
          type: "object"
        },
        replicaCount: {
          type: "integer"
        },
        serviceAccount: {
          properties: {
            create: {
              type: "boolean"
            },
            name: {
              type: "string"
            }
          },
          required: ["create", "name"],
          type: "object"
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
                type: "string"
              },
              key: {
                description:
                  "Key is the taint key that the toleration applies\nto. Empty means match all taint keys. If the key is empty,\noperator must be Exists; this combination means to match\nall values and all keys.",
                type: "string"
              },
              operator: {
                description:
                  "Operator represents a key's relationship to the\nvalue. Valid operators are Exists and Equal. Defaults to\nEqual. Exists is equivalent to wildcard for value, so that\na pod can tolerate all taints of a particular category.",
                type: "string"
              },
              tolerationSeconds: {
                description:
                  "TolerationSeconds represents the period of time\nthe toleration (which must be of effect NoExecute, otherwise\nthis field is ignored) tolerates the taint. By default,\nit is not set, which means tolerate the taint forever (do\nnot evict). Zero and negative values will be treated as\n0 (evict immediately) by the system.",
                format: "int64",
                type: "integer"
              },
              value: {
                description:
                  "Value is the taint value the toleration matches\nto. If the operator is Exists, the value should be empty,\notherwise just a regular string.",
                type: "string"
              }
            },
            type: "object"
          },
          type: "array"
        }
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
        "serviceAccount"
      ],
      type: "object"
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
          enabled: true
        },
        useKubeapiserverFqdnForAks: true,
        versionPriority: 15
      },
      cleaner: {
        registry: "appscode",
        repository: "kubectl",
        tag: "v1.12"
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
          namespace: ""
        },
        serviceMonitor: {
          labels: {}
        }
      },
      nodeSelector: {
        "beta.kubernetes.io/arch": "amd64",
        "beta.kubernetes.io/os": "linux"
      },
      operator: {
        registry: "appscode",
        repository: "stash",
        tag: "0.8.3"
      },
      pushgateway: {
        registry: "prom",
        repository: "pushgateway",
        tag: "v0.5.2"
      },
      rbac: {
        create: true
      },
      replicaCount: 1,
      serviceAccount: {
        create: true,
        name: null
      },
      tolerations: []
    }
  }
];
