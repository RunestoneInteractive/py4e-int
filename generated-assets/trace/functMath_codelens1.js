if (allTraceData === undefined) {
 var allTraceData = {};
 }
 allTraceData["functMath_codelens1"] = {"code": "import math\nnum = 2.0\nresult = math.sqrt(4) / num\nprint(result)\n\n", "trace": [{"line": 1, "event": "step_line", "func_name": "<module>", "globals": {}, "ordered_globals": [], "stack_to_render": [], "heap": {}, "stdout": ""}, {"line": 2, "event": "step_line", "func_name": "<module>", "globals": {"math": ["REF", 1]}, "ordered_globals": ["math"], "stack_to_render": [], "heap": {"1": ["INSTANCE", "module"]}, "stdout": ""}, {"line": 3, "event": "step_line", "func_name": "<module>", "globals": {"math": ["REF", 1], "num": ["SPECIAL_FLOAT", "2.0"]}, "ordered_globals": ["math", "num"], "stack_to_render": [], "heap": {"1": ["INSTANCE", "module"]}, "stdout": ""}, {"line": 4, "event": "step_line", "func_name": "<module>", "globals": {"math": ["REF", 1], "num": ["SPECIAL_FLOAT", "2.0"], "result": ["SPECIAL_FLOAT", "1.0"]}, "ordered_globals": ["math", "num", "result"], "stack_to_render": [], "heap": {"1": ["INSTANCE", "module"]}, "stdout": ""}, {"line": 4, "event": "return", "func_name": "<module>", "globals": {"math": ["REF", 1], "num": ["SPECIAL_FLOAT", "2.0"], "result": ["SPECIAL_FLOAT", "1.0"]}, "ordered_globals": ["math", "num", "result"], "stack_to_render": [], "heap": {"1": ["INSTANCE", "module"]}, "stdout": "1.0\n"}]}