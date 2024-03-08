/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import axios from "axios";

// Initializing Context
const AuthContext = React.createContext();

const API_URL = "http://localhost:5005";